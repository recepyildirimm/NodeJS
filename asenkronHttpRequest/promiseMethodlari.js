// const promiseBasarili = Promise.resolve("Başarılı bir şekilde promis sonuçlandı")
// const promiseHata = Promise.reject(new Error("Hata oluştu"))
// promiseBasarili.then((sonuc)=>{
//     console.log(sonuc);
// })
// promiseHata.then((sonuc)=>{
//     console.log(sonuc);
// }).catch((e)=>{console.log("Hata  "+e);})


const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("3 saniye");
    },3000)
})

const p2 = new Promise((reject)=>{
    setTimeout(()=>{
        reject("4 saniye");
    },4000)
})
const promiseAll=Promise.all([p1,p2]);

promiseAll.then((sonuc)=>{console.log(sonuc);})
.catch(e=>{console.log(e);})