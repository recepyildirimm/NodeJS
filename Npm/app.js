import * as yargs from "yargs"
yargs.version('1.5.4')
const kisi = require("./kisi")
yargs.command({
    command: 'ekle',
    describe: "Yeni kişi ekler",
    builder: {
        isim: {
            describe: "Eklenecek kişi adı",
            demandOption: true,
            type: "string"
        },
        tel: {
            describe: "Telefon numarasını giriniz",
            demandOption: true,
            type: "string"
        }


    },
    handler(argv) {
        kisi.kisiEkle(argv.isim, argv.tel)
    }
},
)
yargs.command({
    command: "sil",
    describe: "Kişiyi siler",
    handler(argv) {
        kisi.kisiSil(argv.isim)
    }

})

// console.log(yargs.argv);
yargs.parse();