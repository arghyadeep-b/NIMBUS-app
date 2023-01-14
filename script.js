const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '27e3263b7amsh8f48716a2088ebdp166b36jsnc7608ac767fa',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)


            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

//Default city
getWeather("Kolkata")
// cityName.innerHTML = city;
// document.querySelector
//! Needs to be fixed
document.quarrySelector('#submit').addEventListenter("click", function (e) {
    e.preventDefault();//? This is not working somehow;
    getWeather(city.value);
})
