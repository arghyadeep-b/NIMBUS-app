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

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            // feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
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

//# Submit button 
const btnSubmit = document.querySelector('.btn-submit');

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    getWeather(`${city.value}`);
});

//? Weather of other places
// Shanghai
const Shanghai = {
    // city: 'Shanghai',

    getData: fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            console.log(response.humidity)
            // document.getElementById("Shanghai_humidity").innerHTML = response.humidity


            document.getElementById("Shanghai_temp").innerHTML = response.temp
            document.getElementById("Shanghai_max_temp").innerHTML = response.max_temp
            document.getElementById("Shanghai_min_temp").innerHTML = response.min_temp
            document.getElementById("Shanghai_wind_speed").innerHTML = response.wind_speed
            document.getElementById("Shanghai_wind_degrees").innerHTML = response.wind_degrees
            document.getElementById("Shanghai_humidity").innerHTML = response.humidity
            document.getElementById("Shanghai_sunrise").innerHTML = response.sunrise
            document.getElementById("Shanghai_sunset").innerHTML = response.sunset
        })

}

//Berlin
const Berlin = {

    getData: fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Berlin', options)
        .then(response => response.json())
        .then(response => {


            document.getElementById("Berlin_temp").innerHTML = response.temp
            document.getElementById("Berlin_max_temp").innerHTML = response.max_temp
            document.getElementById("Berlin_min_temp").innerHTML = response.min_temp
            document.getElementById("Berlin_wind_speed").innerHTML = response.wind_speed
            document.getElementById("Berlin_wind_degrees").innerHTML = response.wind_degrees
            document.getElementById("Berlin_humidity").innerHTML = response.humidity
            document.getElementById("Berlin_sunrise").innerHTML = response.sunrise
            document.getElementById("Berlin_sunset").innerHTML = response.sunset
        })

}

//Bangalore
const Bangalore = {

    getData: fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
        .then(response => response.json())
        .then(response => {
            console.log(response.wind_speed)

            document.getElementById("Bangalore_temp").innerHTML = response.temp
            document.getElementById("Bangalore_max_temp").innerHTML = response.max_temp
            document.getElementById("Bangalore_min_temp").innerHTML = response.min_temp
            document.getElementById("Bangalore_wind_speed").innerHTML = response.wind_speed
            document.getElementById("Bangalore_wind_degrees").innerHTML = response.wind_degrees
            document.getElementById("Bangalore_humidity").innerHTML = response.humidity
            document.getElementById("Bangalore_sunrise").innerHTML = response.sunrise
            document.getElementById("Bangalore_sunset").innerHTML = response.sunset
        })

}

//Delhi
const Delhi = {

    getData: fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then(response => {
            console.log(response.wind_speed)

            document.getElementById("Delhi_temp").innerHTML = response.temp
            document.getElementById("Delhi_max_temp").innerHTML = response.max_temp
            document.getElementById("Delhi_min_temp").innerHTML = response.min_temp
            document.getElementById("Delhi_wind_speed").innerHTML = response.wind_speed
            document.getElementById("Delhi_wind_degrees").innerHTML = response.wind_degrees
            document.getElementById("Delhi_humidity").innerHTML = response.humidity
            document.getElementById("Delhi_sunrise").innerHTML = response.sunrise
            document.getElementById("Delhi_sunset").innerHTML = response.sunset
        })

}
