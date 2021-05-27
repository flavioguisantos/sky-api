const idalSky = require('../dal/IdalSky')
const generationHash = require('../use-case/generationHash')
const token = require('../use-case/token')

const processingUsers = async (req, res) => {
    let bodyHash = await generationHash.createHashPassword(req.body)
    const tokenGeneration = await token.generationToken(bodyHash)
    let result = await idalSky.resultInsertUsers(tokenGeneration)

    if (result._id != undefined) {
        const hashToken = generationHash.createHashToken(result)
        res.send(hashToken)
    } else {
        res.send({ erro: 'Já existe usuário cadastrado com esse email!' })
    }
}

const processingLogin = async (req, res) => {
    const tokenGenerationLogin = await token.generationToken(req.body)
    let result = await idalSky.resultLoginUser(tokenGenerationLogin)

    if (result._id != undefined) {
        const hashToken = generationHash.createHashToken(result)
        res.send(hashToken)
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

module.exports = { processingUsers, processingLogin }
