const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6409c9299da4179e8ed3f0a2536aaff1&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}