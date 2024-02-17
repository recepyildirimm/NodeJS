import mongoose from "mongoose";

function dbConnection() {
    
mongoose.connect("mongodb://localhost/restful_api").then(()=>{
    console.log("Veritabanına bağlanıldı");
}).catch((err)=>{
    console.log("db bağlantı hatası",err);
})

}
export default dbConnection();
