const idalSky = require('../dal/IdalSky')

const processingUsers = async (req, res) => {
    let result = await idalSky.resultInsertUsers(req.body)
    if (result == 'success') {
        res.send(await processingSearch(req.body))
    } else {
        res.send({ erro: 'Já existe usuário cadastrado com esse email!' })
    }
}

module.exports = { processingUsers }