// const selamVer = function () {
//     console.log("Merhaba");
// }
// selamVer();

// const selamArrowFun = () => {
//     console.log("Merhaba arrow");
// }
// selamArrowFun();


const person = {
    ad: "Recep",
    sevdigiRenkler: ["mavi", "sari"],
    bilgileriGoster: function () {
        const obje=this
        console.log(this);
        this.sevdigiRenkler.forEach(function (renk) {
            console.log(obje.ad + " ın sevdigi renklşer " + renk);
        })
    }
}

person.bilgileriGoster()

const person2 = {
    ad: "Recep",
    bilgileriGoster: () => {
        console.log(this);
    }
}
person2.bilgileriGoster()