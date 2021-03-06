const jwt = require('jsonwebtoken')
require('dotenv').config()
const JWTsecret = 'skyFlavioGuilherme'
const generationHash = require('../use-case/generationHash')

const generationToken = async (params) => {
    const token = jwt.sign(
        {
            nome: params.nome,
            email: params.email
        },
        JWTsecret,
        { expiresIn: process.env.expiresIn }
    )

    params.token = token
    return params
}

module.exports = { generationToken }
