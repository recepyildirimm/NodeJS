// let isim = ["Recep", "Yıldırım"];
// const ad = isim[0]
// const soyad = isim[1]
// console.log(ad + " " + soyad);
// let [firstName, Lastname] = isim;
// console.log(firstName + " " + Lastname);

// let [a, b] = "Recep YILDIRIM".split(" ")
// console.log(a);
// console.log(b);

// let [ilk, , son] = ["mavi", "sarı", "kırmızı"]
// console.log(ilk);
// console.log(son);

// let kisi = {};
// [kisi.ad, kisi.soyad] = "Recep YILDIRIM".split(" ")
// console.log(kisi);

// let [ad1 ,ad2,...ad3]= ["recep","furkan","sabri","mehmet","emre"]
// console.log(ad3);


// let kisi ={
//     ad: {
//         firstName:"Recep",
//         lastName:"YILDIRIM"
//     },
//     sevdigiRenkler: ["Mavi","Siyah"],
//     yas:25
// }

// const{
//     ad:{firstName,lastName},
//     sevdigiRenkler:[item1,item2],
//     yas
// }=kisi
// console.log(`${firstName} ${item2}`);

function kisiyiGoster(isim = "Bilinmiyor", yas = 0, boyu = 180, sevdigiRenkler = []) {

}
const parametreler = {
    isim: "Recep",
    sevdigiRenkler: ["Mavi", "Kırmızı"],
    yas:23
}
kisiyiGoster2(parametreler);

function kisiyiGoster2({ isim = "Bilinmiyor", sevdigiRenkler = [], yas = 0, boy = 0 }) {
    console.log(isim + "  " + yas);
}
