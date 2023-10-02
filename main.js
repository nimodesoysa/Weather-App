const apiKey = "dcddbdbb0b65d1757827d8a75b23c2f7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "Images/clouds.png";
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "Images/clear.png";
        } else if (data.weather[0].main == 'Rain') { 
            weatherIcon.src = "Images/rain.png";
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "Images/drizzle.png";
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "Images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


const apiKey2 = "0b716762270e4e64b4b52258230110";
const apiUrl2 = "http://api.weatherapi.com/v1";

async function checkForecastWeather(city) {
    const response = await fetch(`${apiUrl2}/forecast.json?key=${apiKey2}&q=${humidity},${wind_kph}&days=3`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weathertmr").style.display = "none";
        document.querySelector(".weatherdaytmr").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".temptmr").innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c) + "°c";
        document.querySelector(".humiditytmr").innerHTML = data.forecast.forecastday[1].day.avghumidity + "%";
        document.querySelector(".windtmr").innerHTML = data.forecast.forecastday[1].day.maxwind_kph + "km/h";

        document.querySelector(".tempdaytmr").innerHTML = Math.round(data.forecast.forecastday[2].day.maxtemp_c) + "°c";
        document.querySelector(".humiditydaytmr").innerHTML = data.forecast.forecastday[2].day.avghumidity + "%";
        document.querySelector(".winddaytmr").innerHTML = data.forecast.forecastday[2].day.maxwind_kph + "km/h";

        if (data.forecast.forecastday[1].day.condition.text == 'Clouds' ||data.forecast.forecastday[2].day.condition.text == 'Clouds') {
            weatherIcon.src = "Images/clouds.png";
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "Images/clear.png";
        } else if (data.weather[0].main == 'Rain') { 
            weatherIcon.src = "Images/rain.png";
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "Images/drizzle.png";
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "Images/mist.png";
        }

        document.querySelector(".weathertmr").style.display = "block";
        document.querySelector(".weatherdaytmr").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getEndDate() {
    const date = new Date();
    date.setDate(date.getDate() - 2);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

async function checkHistoryWeather(city,currentDate, endDate) {
    fetch(`${apiUrl2}/history.json?key=${apiKey2}&q=${humidity},${wind_speed}&dt=${endDate}&end_dt=${currentDate}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weatheryes").style.display = "none";
        document.querySelector(".weatherdayyes").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".tempyes").innerHTML = Math.round(data.forecast.forecastday[0].day.maxtemp_c) + "°c";
        document.querySelector(".humidityyes").innerHTML = data.forecast.forecastday[0].day.avghumidity + "%";
        document.querySelector(".windyes").innerHTML = data.forecast.forecastday[0].day.maxwind_kph + "km/h";

        document.querySelector(".tempdayyes").innerHTML = Math.round(data.forecast.forecastday[1].day.maxtemp_c) + "°c";
        document.querySelector(".humiditydayyes").innerHTML = data.forecast.forecastday[1].day.avghumidity + "%";
        document.querySelector(".winddayyes").innerHTML = data.forecast.forecastday[1].day.maxwind_kph + "km/h";

        if (data.forecast.forecastday[0].day.condition.text == 'Clouds' ||data.forecast.forecastday[1].day.condition.text == 'Clouds') {
            weatherIcon.src = "Images/clouds.png";
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "Images/clear.png";
        } else if (data.weather[0].main == 'Rain') { 
            weatherIcon.src = "Images/rain.png";
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "Images/drizzle.png";
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "Images/mist.png";
        }

        document.querySelector(".weathertmr").style.display = "block";
        document.querySelector(".weatherdaytmr").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}