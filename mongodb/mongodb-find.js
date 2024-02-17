const { MongoClient,ObjectId } = require("mongodb")

const databaseUrl = "mongodb://localhost:27017"
const databaseName = "node-dersleri"

MongoClient.connect(databaseUrl).then(client => {
    console.log("Bağlantı gerçekleşti");
    const db = client.db(databaseName);


    // FIND Işlemleri
db.collection("users").find({ad:"Ahmet"}).limit(1).toArray().then(bulunanVeriler =>{
    console.log(bulunanVeriler);
})

db.collection("users").countDocuments({ ad: "Ahmet" },{limit:1}).then(sayi => {
    console.log(sayi);
}).catch(error => {
    console.log("Hata oluştu: " + error);
});
db.collection("users").findOne({_id:new ObjectId("65212cbc9abda1715e058dd2")}).then(gelenUser=>{
    console.log(gelenUser);
})


})