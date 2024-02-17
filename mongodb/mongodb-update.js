const {MongoClient} = require("mongodb")
const databaseUrl = "mongodb://localhost:27017"
databaseName = "node-dersleri"
MongoClient.connect(databaseUrl).then(client =>{
    console.log("Bağlantı gerçekleşti")
const db = client.db(databaseName)
db.collection("users").updateMany({ad:"Ahmet"},{
    $inc:{
        yas: 1
    }

}).then(updateUser =>{
    console.log(updateUser);
})
})
