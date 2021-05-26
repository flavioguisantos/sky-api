const idalSky = require('../dal/IdalSky')
const generationHash = require('../use-case/generationHash')
const token = require('../use-case/token')

const processingUsers = async (req, res) => {
    const bodyHash = await generationHash.createHashPassword(req.body)    
    let result = await idalSky.resultInsertUsers(bodyHash)
    
    if (result._id != undefined) {
        res.send(await token.generationToken(result))
    } else {
        res.send({ erro: 'Já existe usuário cadastrado com esse email!' })
    }
}

module.exports = { processingUsers }