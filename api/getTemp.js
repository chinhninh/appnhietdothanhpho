const URL = 'https://api.openweathermap.org/data/2.5/weather?q='

const API = '&units=metric&appid=977155e0da8cc328d0a6456bc78fb4fc'

function getTemp(cityName){
    return fetch(URL + cityName + API)
    .then(res => res.json())
    .then(resJSON => resJSON.main.temp)
}

export default getTemp