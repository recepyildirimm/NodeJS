const {MongoClient, ObjectId} = require("mongodb")
const databaseUrl = "mongodb://localhost:27017"
const databaseName = "node-dersleri"

MongoClient.connect(databaseUrl).then(client =>{
    console.log("Bağlantı başarılı");
    const db = client.db(databaseName)

    db.collection("users").deleteOne({_id:new ObjectId("65212cbc9abda1715e058dd2")}).then(result =>{
        console.log(result,"Silindi");
    })
})