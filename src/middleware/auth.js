const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator')
const JWTsecret = 'skyFlavioGuilherme'

// recebe o token das rotas /sky para validação
const auth = async (req, res, next) => {
    const authToken = req.headers['authorization']
    const result = await validateToken(authToken)
    if (result == 'authenticate') {
        next()
    } else {
        res.status(401).json({ err: 'Token inválido!' })
    }
}

// validação do token recebido
const validateToken = async (params) => {
    if (params != undefined) {
        const bearer = params.split(' ')
        var token = bearer[1]
        jwt.verify(token, JWTsecret, (err, data) => {
            if (err) {
                resultValidate = 'not authenticate'
            } else {
                resultValidate = 'authenticate'
            }
        })
    } else {
        resultValidate = 'not authenticate'
    }
    return resultValidate
}

module.exports = { auth, validateToken }