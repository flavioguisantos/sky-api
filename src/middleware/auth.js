const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator')
const JWTsecret = 'skyFlavioGuilherme'

// recebe o token das rotas /sky para validação
const auth = async (req, res, next) => {
    const authToken = req.headers['authorization']
    const result = await validateToken(authToken)
    if (result.status == 'authenticate') {
        req.body.nome = result.nome
        req.body.email = result.email
        next()
    } else {
        res.status(401).json({ err: 'Não autorizado' })
    }
}

// validação do token recebido
const validateToken = async (params) => {
    let resultValidate
    if (params != undefined) {
        const bearer = params.split(' ')
        var token = bearer[1]

        jwt.verify(token, JWTsecret, (err, data) => {
            if (err) {
                resultValidate = { status: 'Não autorizado' }
            } else {
                resultValidate = {
                    status: 'authenticate',
                    nome: data.nome,
                    email: data.email
                }
            }
        })
    } else {
        resultValidate = { status: 'Não autorizado' }
    }
    return resultValidate
}

module.exports = { auth, validateToken }
