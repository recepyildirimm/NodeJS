console.log("Başladı");
console.log("Bitti");

function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log(id + " idli kullanıcı getiriliyor");
        setTimeout(() => {
            resolve({ id: id, ad: "Recep" })
        }, 1500)
    })
}

function getCourse(userName) {
    return new Promise((resolve, reject) => {
        console.log(userName + "li kullanıcının kursları getiriliyor");
        setTimeout(() => {
            resolve(["java,", "python", "flutter"])
        }, 2000)

    })
}

// getUser(123).then(sonuc => getCourse(sonuc.ad))
//     .then(kursDizisi => console.log(kursDizisi));

 async function kurslariGetir(){
    const user = await getUser(123);
    const kurslar = await getCourse(user.ad)
    console.log(kurslar);
 }
 kurslariGetir();