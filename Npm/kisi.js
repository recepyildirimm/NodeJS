
const fs = require("fs");

const kisiEkle = (ad, telNo) => {
    console.log("eklenecek kisi , " + ad + "Tel No:" + telNo);
    const kisiler = dosyadanKisileriOku();
    const ayniAdaSahip = kisiler.filter((kisi) => {
        return kisi.isim === ad;
    })
    if (ayniAdaSahip.length === 0) {
        kisiler.push({ isim: ad, tel: telNo });
        dosyayaKisileriYaz(kisiler);
    } else {
        console.log("Aynı isimli kayıt var");

    }


}
const dosyadanKisileriOku = () => {
    try {
        const dataBuffer = fs.readFileSync("kisiler.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    }
    catch (e) {
        return []
    }
}
const dosyayaKisileriYaz = (kisiler) => {
    const jsonData = JSON.stringify(kisiler)
    fs.writeFileSync("kisiler.json", jsonData)

}

const kisiSil = (isim) => {
    const tumKisiler = dosyadanKisileriOku();
    const dosyayaTekrarYazilacak = tumKisiler.filter((kisi) => {
        return kisi.isim !== isim;
    })
    if (tumKisiler.length > dosyayaTekrarYazilacak.length) {
        console.log("Silinecek Kişi " + isim);
        dosyayaKisileriYaz(dosyayaTekrarYazilacak)

    } else {
        console.log("Listede yok");
    }
}
exports.kisiEkle = kisiEkle;
exports.kisiSil = kisiSil