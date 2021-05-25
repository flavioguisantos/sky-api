
const mongoClient = require('mongodb').MongoClient
require('dotenv').config()

mongoClient.connect("mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT , {useUnifiedTopology: true})
    .then(conn => connection = conn.db(process.env.DB_DATA))
    .catch(err => console.log(err))
    
function dalMongoDB() {
     try {
        return connection.collection(process.env.DB_COLLECTION).find().toArray() 
     } catch (error) {
         return "Erro na conexão!"
     }
}
 
async function insertUsers(params){
      try {
            let result = await connection.collection(process.env.DB_COLLECTION).findOne({email: params.email})
            if(result.length == 0){
                let result = await connection.collection(process.env.DB_COLLECTION).insertOne(params)
                return result

            }else{
                return {erro: "E-mail já existente"}
            }

      } catch (error) {
            return "Erro na conexão!"
      }      
}

module.exports = { dalMongoDB, insertUsers } 