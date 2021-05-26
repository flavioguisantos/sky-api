const express = require('express')
const router = express.Router()
const validateAuth = require('../middleware/auth')
const validateRoutes = require('../middleware/validateRoutes')
const processUsers = require('../middleware/processingUsers')

router.use('/sky', validateAuth.auth)

router.post(
    '/api/sign-up',
    validateRoutes.validateRouteUsers(),
    validateRoutes.validateResultUsers,
    processUsers.processingUsers
)

//router.post('/api/listResult', validate.listResultValidate)

//router.post('/oapi/authenticate', validate.authenticate)

module.exports = router
