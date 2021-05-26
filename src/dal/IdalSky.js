const dalMongo = require('../data-access/dalMongo')

const resultInsertUsers = async (params) => {
    const result = await dalMongo.insertUsers(params)
    
    if (result._id != undefined) {
        return result
    } else {
        return 'fail'
    }
}

module.exports = { resultInsertUsers }