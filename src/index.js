document.addEventListener('DOMContentLoaded',() =>{
    getWeather('Nairobi');

})
const apikey = '1db2821680c55cae961eb3354269fb98';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=`;


        const areaCode = document.querySelector('#areacode')
        const cityName = document.querySelector('#city-name')
        const humidity = document.querySelector('#humidity')
        const wind = document.querySelector('#wind')
        const input = document.querySelector('#city-input');
        const temperature = document.querySelector('#temperature');
        const condition = document.querySelector('#weather-condition');
        const search = document.querySelector('#search');

function getWeather(city){
    fetch(apiUrl + city + `&appid=${apikey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        areaCode.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + '%';
        wind.innerHTML = data.wind.speed + 'Km/h';
        condition.innerHTML = data.weather[0].main;
        cityName.innerHTML = data.name;

        

    })
    .catch(error => error.log('Error', Error))
}










