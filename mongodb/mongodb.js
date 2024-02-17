import { MongoClient, ObjectId } from "mongodb";

const databaseUrl = "mongodb://localhost:27017";
const databaseName = "node-dersleri";
 
function main() {
    console.log("Connect öncesi");
const myId = new ObjectId();
console.log(myId.getTimestamp());
    MongoClient.connect(databaseUrl)
        .then(client => {
            console.log("Dbye Bağlanıldı");
            const db = client.db(databaseName);
            db.collection("users").insertOne(
                {
                    _id:myId,ad:"Recep",createdTime:myId.getTimestamp()
                }
            ).then(result=>{
                console.log("Veri başarıyla eklendi",result);
            }).catch(err=>{
                console.log("Veri eklenemedi",err);
            })

            //Insert One
            // db.collection("users").insertOne({
            //     ad: "Recep",
            //     yas: 23
            // })
            //     .then(result => {
            //         console.log("Veri başarıyla eklendi:", result);
            //     })
            //     .catch(error => {
            //         console.log("Veri eklenemedi:", error);
            //     })

            //Insert Many
            // db.collection("users").insertMany([
            //     { ad: "Recep", soyad: "YILDIRIM", yas: 23 },
            //     { ad: "Ahmet", soyad: "YILMAZ", yas: 24 }
            // ]).then(result => { 
            //     console.log("Veri başarıyla eklendi" ,result);
            // }).catch(error => {
            //     console.log("Veri eklenemedi" + error);
            // })
            // db.collection("urunler").insertMany([
            //     {ad:"Telefon",stok:50,fiyat:1500},
            //     {ad:"Bilgisayar",stok:24,fiyat:4500},
            //     {ad:"Kulaklık",stok:110,fiyat:5500},
            //     {ad:"Klavye",stok:80,fiyat:500}
            // ]).then(result =>{
            //     console.log(result,"Ürünler eklendi");
            //     console.log(result.insertedCount,"Ürünler eklendi");
            // }).catch(err =>{
            //     console.log("Ürün eklenemedi",err);
            // })


        })
        .catch(error => {
            console.log("Dbye bağlanılamadı", error);
        });
}

main();





