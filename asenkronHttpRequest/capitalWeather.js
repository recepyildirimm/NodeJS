const axios = require('axios');

function capitalWeather(ulke) {
    axios.get(`https://restcountries.com/v3.1/name/${ulke}`).then(response => {

        const ulke = response.data[0];
        baskent = ulke.capital[0]

        console.log(baskent);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${baskent}&appid=898376a58460a05b05941d681431bacf&lang=tr&units=metric`).then(res => {
            console.log(res.data.weather[0].description);
            console.log(res.data.main.temp);
        })
    })

}

module.exports= capitalWeather;