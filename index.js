const express = require('express')
const cors = require('cors')
const router = require('./src/controllers/routes')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(express.json())
app.use(cors())
app.use(router)

var port_number = app.listen(process.env.PORT || 3000)
app.listen(port_number, () => {
    console.log('Express started success !!!')
})
