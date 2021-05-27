const bcryptjs = require('bcryptjs')
const salt = bcryptjs.genSaltSync(10)

const createHashPassword = (params) => {
    const hashPassword = bcryptjs.hashSync(params.senha, salt)
    params.senha = hashPassword
    return params
}

const createHashToken = (params) => {
    const hashToken = bcryptjs.hashSync(params.token, salt)
    params.token = hashToken
    return params
}

module.exports = { createHashPassword, createHashToken }
