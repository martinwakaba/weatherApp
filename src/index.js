document.addEventListener('DOMContentLoaded',() =>{
    getWeather('Nairobi');

})
const apikey = '1db2821680c55cae961eb3354269fb98';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=`;

function getWeather(city){
    fetch(apiUrl + city + `&appid=${apikey}`)
    .then(res => res.json())
    .then(data => {
        const area = document.querySelector

    })
    .catch(error => error.log('Error', Error))
}