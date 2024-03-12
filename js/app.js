const API_KEY = "b35fb76d1e8ce9f55ee4003872efd573";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = document.querySelector(".city");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const wheatherIcon = document.querySelector(".wheather-icon");
const searchBtn = document.querySelector(".search-btn");
const wheatherdata = document.querySelector(".weather-data");
const container = document.querySelector(".container");
const input = document.querySelector("input");
    

const wheatherCheck = async () => {    
    const searchCity = input.value.toLowerCase();
    // console.log(searchCity);
    try {
        const res = await fetch(API_URL + searchCity + `&appid=${API_KEY}`);
        const data = await res.json();
    
        // console.log(data);

        city.innerText = data.name;
        temperature.innerText = Math.round(data.main.temp) + " °C";
        humidity.innerText = data.main.humidity + " %";
        wind.innerText = data.wind.speed + " km/h";
        wheatherdata.innerText = data.weather[0].main;

        if(data.weather[0].main == 'Clouds') {
            // wheatherIcon.setAttribute('src', 'images/clouds.png');
            wheatherIcon.src = 'images/clouds.png';
            container.style.background = "#9c9c9c";
            container.style.color = "#000";
        } else if(data.weather[0].main == 'Clear') {
            wheatherIcon.src = 'images/clear.png';
            container.style.background = "#3796e4";
            container.style.color = "#fff";
        } else if(data.weather[0].main == 'Rain') {
            wheatherIcon.src = 'images/rain.png';
            container.style.background = "#9c9c9c";
            container.style.color = "#000";
        } else if(data.weather[0].main == 'Drizzle') {
            wheatherIcon.src = 'images/drizzle.png';
            container.style.background = "#9c9c9c";
            container.style.color = "#000";
        } else if(data.weather[0].main == 'Mist') {
            wheatherIcon.src = 'images/mist.png';
            container.style.background = "#9c9c9c";
            container.style.color = "#000";
        }
    } catch (e) {
        alert("Please Enter Correct city name or check your internet connection!");
        console.log(e);
    }
    // if()
};

searchBtn.addEventListener('click', (evt) => { 
    evt.preventDefault();
    wheatherCheck();
    document.querySelector('.wheather').style.display = "flex";
}
);

input.addEventListener('keypress', (evt) => { 
    if(evt.key == 'Enter') {
        evt.preventDefault();
        wheatherCheck();
        document.querySelector('.wheather').style.display = "flex";
    }
    }
);
