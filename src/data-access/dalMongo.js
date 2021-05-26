const uuid = require('uuid')
const mongoClient = require('mongodb').MongoClient
require('dotenv').config()

mongoClient.connect(process.env.DB_HOST + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.DB_CLUSTER, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(conn => connection = conn.db(process.env.DB_DATA))
    .catch(err => console.log(err))
    
const dalMongoDB = () => {
     try {
        return connection.collection(process.env.DB_COLLECTION).find().toArray() 
     } catch (error) {
         return "Erro na conexão!"
     }
}

 const insertUsers = async (params) =>{
      try {
            let result = await connection.collection(process.env.DB_COLLECTION).findOne({email: params.email})
            if(result == null){

                let data = new Date();
                let myuuid =  uuid.v4()
                params._id =  myuuid
                let retorno = {}
                let result = await connection.collection(process.env.DB_COLLECTION).insertOne(params)

                let logs = {_id: myuuid, data_criacao: data, data_atualizacao: data, ultimo_login: data}
                let log = await connection.collection(process.env.DB_COLLECTION_LOG).insertOne(logs)
                retorno._id = params._id
                retorno.nome = params.nome
                retorno.email = params.email
                retorno.data_criacao = data
                retorno.data_atualizacao = data
                retorno.ultimo_login = data

                return retorno

            }else{
                return {erro: "E-mail já existente"}
            }

      } catch (error) {
            return "Erro na conexão!"
      }      
}

module.exports = { dalMongoDB, insertUsers } 
