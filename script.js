const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '27e3263b7amsh8f48716a2088ebdp166b36jsnc7608ac767fa',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));