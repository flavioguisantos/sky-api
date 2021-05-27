const dalMongo = require('../data-access/dalMongo')

const resultInsertUsers = async (params) => {
    const result = await dalMongo.insertUsers(params)

    if (result._id != undefined) {
        return result
    } else {
        return 'fail'
    }
}

const resultLoginUser = async (params) => {
    const result = await dalMongo.loginUser(params)

    if (result._id != undefined) {
        return result
    } else {
        return { status: 500 }
    }
}

const resultSearchUser = async (params) => {
    const result = await dalMongo.SearchUser(params)

    if (result._id != undefined) {
        return result
    } else {
        return { status: 500 }
    }
}
module.exports = { resultInsertUsers, resultLoginUser, resultSearchUser }
