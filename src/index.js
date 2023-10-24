document.addEventListener('DOMContentLoaded',() =>{
    getWeather('Arusha');

})
const apikey = '1db2821680c55cae961eb3354269fb98';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=`;

function getWeather(city){
    fetch(apiUrl + city + `&appid=${apikey}`)
    .then(res => res.json())
    .then(data => {
        const areaCode = document.querySelector('#areacode')
        const input = document.querySelector('#city-input');
        const temperature = document.querySelector('#temperature');
        const condition = document.querySelector('#conditiont');
        const search = document.querySelector('#search');

        areaCode.innerHTML = data.name;

        

    })
    .catch(error => error.log('Error', Error))
}










