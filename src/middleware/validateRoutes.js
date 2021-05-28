const { body, validationResult } = require('express-validator')

const validateRouteLogin = () => {
    return [
        body('email').notEmpty().withMessage('O campo email é obrigatório'),
        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('O campo email não contém um email válido'),
        body('senha').notEmpty().withMessage('O campo senha é obrigatório')
    ]
}

const validateResultLogin = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors
    })
}

const validateRouteUsers = () => {
    return [
        //validação dos dados

        body('nome').notEmpty().withMessage('O campo nome é obrigatório'),
        body('email').notEmpty().withMessage('O campo email é obrigatório'),
        body('email')
            .isEmail()
            .normalizeEmail()
            .withMessage('O campo email não contém um email válido'),
        body('senha').notEmpty().withMessage('O campo senha é obrigatório'),
        body('telefones.numero')
            .isLength({ max: 9 })
            .withMessage('O numero do telefone aceita no máximo 9 caracteres'),
        body('telefones[0].numero')
            .isInt()
            .withMessage('O campo numero do telefone só aceita números'),
        body('telefones[0].numero')
            .notEmpty()
            .withMessage('O campo numero do telefone é obrigatório'),
        body('telefones.ddd')
            .isLength({ max: 2 })
            .withMessage('O ddd aceita no máximo 2 caracteres'),
        body('telefones[0].ddd')
            .isInt()
            .withMessage('O campo ddd só aceita números'),
        body('telefones[0].ddd')
            .notEmpty()
            .withMessage('O campo ddd é obrigatório')
    ]
}

const validateResultUsers = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors
    })
}

module.exports = {
    validateRouteUsers,
    validateResultUsers,
    validateRouteLogin,
    validateResultLogin
}
