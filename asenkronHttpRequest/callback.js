console.log("Program Başladı");

getUser(12345,(userObject)=>{
    console.log("Getirilen user: " + userObject.ad);

});
console.log("Program bitti");


function getUser(id,callback) {
    setTimeout(() => {
        console.log(id + " idli user getiriliyor");
        callback({ id: id, ad: "Recep" })
         
    },3000)

}


