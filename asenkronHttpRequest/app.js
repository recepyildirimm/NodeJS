const yargs = require("yargs")
const capitalWeather = require("./capitalWeather")
yargs.command({
    command: "getir",
    describe: "bilgileri getirelecek ülke",
    builder: {
        ulke: {
            describe: "ulkeyi ingilizce olarak yazınız",
            demandOption: true,
            type:"string"
        }
    },
    handler(argv){
        capitalWeather(argv.ulke)
    }
})
yargs.parse();

