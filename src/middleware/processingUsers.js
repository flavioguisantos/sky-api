const idalSky = require('../dal/IdalSky')
const generationHash = require('../use-case/generationHash')
const token = require('../use-case/token')

const processingUsers = async (req, res) => {
    let bodyHash = await generationHash.createHashPassword(req.body)
    let result = await idalSky.resultInsertUsers(bodyHash)

    if (result._id != undefined) {
        const tokenGeneration = await token.generationToken(result)
        res.send(tokenGeneration)
    } else {
        res.send({ erro: 'Já existe usuário cadastrado com esse email!' })
    }
}

const processingLogin = async (req, res) => {
    const tokenGenerationLogin = await token.generationToken(req.body)
    let result = await idalSky.resultLoginUser(tokenGenerationLogin)

    if (result._id != undefined) {
        const tokenGenerationLogin = await token.generationToken(result)
        res.send(tokenGenerationLogin)
    } else {
        if (result.status != 500) {
            res.status(result.status).send({
                erro: 'Usuário e/ou senha inválidos'
            })
        } else {
            res.status(result.status).send({ erro: 'Erro interno' })
        }
    }
}

const processingSearchUser = async (req, res) => {
    let result = await idalSky.resultSearchUser(req.body)
    if (result._id != undefined) {
        res.send(result)
    } else {
        res.send({ erro: 'Não autorizado' })
    }
}

module.exports = { processingUsers, processingLogin, processingSearchUser }
