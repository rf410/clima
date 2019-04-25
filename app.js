const argv = require('./config/yargs').argv;
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const getInfo = async(direccion) => {
    try {
        const coordenadas = await getLugarLatLng(direccion);
        const temp = await getClima(coordenadas.lat, coordenadas.lng);
        return `La temperatura actual de ${coordenadas.direccion} es de ${temp}°`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion)
    .then((resp) => {
        console.log(resp);
    })
    .catch((err) => {
        console.log(err);
    });