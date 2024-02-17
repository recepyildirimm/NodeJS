const myPromise = new Promise( (resolve,reject)=>{

    console.log("3 Saniyelik işlen başladı");
    setTimeout(()=>{

console.log("işlem bitti");
//resolve("İşlem sonucu burada")
reject("Hata çıktı")
    },3000)
})

myPromise.then((sonuc)=>{
    console.log(sonuc);
}).catch((err)=>{
    console.log(err);
})