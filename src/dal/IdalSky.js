const dalMongo = require('../data-access/dalMongo')

const resultInsertUsers = async (params) => {
    const result = await dalMongo.insertUsers(params)
    console.log(result)
    if (result.insertedCount == 1) {
        return 'success'
    } else {
        return 'fail'
    }
}

module.exports = { resultInsertUsers }