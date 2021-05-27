const uuid = require('uuid')
const mongoClient = require('mongodb').MongoClient
require('dotenv').config()
const bcrypt = require('bcryptjs')

mongoClient
    .connect(
        process.env.DB_HOST +
            process.env.DB_USER +
            ':' +
            process.env.DB_PASS +
            process.env.DB_CLUSTER,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((conn) => (connection = conn.db(process.env.DB_DATA)))
    .catch((err) => console.log(err))

const loginUser = async (params) => {
    try {
        let data = new Date()
        const result = await connection
            .collection(process.env.DB_COLLECTION)
            .findOne({ email: params.email })
        if (result == null) {
            return { status: 400 }
        } else {
            const correct = bcrypt.compareSync(params.senha, result.senha)
            if (correct) {
                const resultUpdate = await connection
                    .collection(process.env.DB_COLLECTION)
                    .updateOne(
                        { _id: result._id },
                        { $set: { token: params.token } },
                        { new: true, upsert: false, returnOriginal: false }
                    )

                let retorno = {}
                retorno._id = result._id
                retorno.nome = result.nome
                retorno.email = result.email
                retorno.data_criacao = result.data_criacao
                retorno.data_atualizacao = result.data_atualizacao
                retorno.ultimo_login = await searchLogin(result._id)
                retorno.token = params.token

                let logs = {
                    id_user: result._id,
                    ultimo_login: data
                }
                let log = await connection
                    .collection(process.env.DB_COLLECTION_LOG)
                    .insertOne(logs)

                return retorno
            } else {
                return { status: 401 }
            }
        }
    } catch (error) {
        return error
    }
}

const searchLogin = async (params) => {
    try {
        const result = await connection
            .collection(process.env.DB_COLLECTION_LOG)
            .find({ id_user: params })
            .limit(1)
            .sort({ $natural: -1 })
        if (result != null) {
            return result.ultimo_login
        }
        return result
    } catch (error) {
        return { erro: 'erro ao consultar log de usúario' }
    }
}

const insertUsers = async (params) => {
    try {
        let data = new Date()
        let result = await connection
            .collection(process.env.DB_COLLECTION)
            .findOne({ email: params.email })
        if (result == null) {
            let myuuid = uuid.v4()
            params._id = myuuid
            params.data_criacao = data
            params.data_atualizacao = data
            let retorno = {}
            let result = await connection
                .collection(process.env.DB_COLLECTION)
                .insertOne(params)

            let logs = {
                id_user: myuuid,
                ultimo_login: data
            }
            let log = await connection
                .collection(process.env.DB_COLLECTION_LOG)
                .insertOne(logs)
            retorno._id = params._id
            retorno.nome = params.nome
            retorno.email = params.email
            retorno.data_criacao = params.data_criacao
            retorno.data_atualizacao = data
            retorno.ultimo_login = data
            retorno.token = params.token

            return retorno
        } else {
            return { erro: 'E-mail já existente' }
        }
    } catch (error) {
        return 'Erro na conexão!'
    }
}

module.exports = { insertUsers, loginUser }
