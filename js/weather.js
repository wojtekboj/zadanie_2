'use strict';

// API OpenWeatherMap
let url = 'https://api.openweathermap.org/data/2.5/weather?q=Lublin&lang=pl&appid=0c82495a65e74526f9c831ce2d6b9a38&units=metric';

let name = document.getElementById('name');
let temp = document.getElementById('temp');
let pressure = document.getElementById('pressure');
let humidity = document.getElementById('humidity');
let clouds = document.getElementById('clouds');
let desc = document.getElementById('desc');
let lastModified = document.getElementById('lastModified');
let wind = document.getElementById('wind');

setInterval('getWeather()', 30000); // Odświeżanie skryptu w interwale co 30s

function getWeather() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        let response = JSON.parse(xhr.response);
        name.innerHTML = response.name; // Nazwa miejscowości pobrana z API
        temp.innerHTML = response.main.temp + ' &#186;C'; // Wartość temperatury pobrana z API (w stopniach C)
        pressure.innerHTML = response.main.pressure + ' hPa'; //Wartość ciśnienia pobrana z API (W hPa)
        humidity.innerHTML = response.main.humidity + ' %'; // Wartość wilgotności pobrana z API
        clouds.innerHTML = '<img src="https://bojarczuk.pl/w/' + response.weather[0].icon + '.png" alt="clouds">'; // Graficzna reprezentacja aktualnej sytuacji pogodowej w formie ikonki pobranej z zewnętrznego serwera
        desc.innerHTML = response.weather[0].description; // Opis zachmurzenia pobrany z API
        wind.innerHTML = response.wind.speed + ' m/s'; // Wartość prędkości wiatru pobrana z API (w m/s)
        lastModified.innerHTML = 'Ostatnia aktualizacja: ' + document.lastModified; // Data ostatniej aktualizacji pogody
    });
    xhr.send();
}

// Button zamykający widget
$(document).ready(function () {
    $('button').click(function () {
        $('.weather').remove();
    });
});

getWeather();