import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import bgVideo from '../assets/weatherchange.mp4'

function WeatherApp() {
    const [search, setsearch] = useState("")
    const [humidity, setHumidity] = useState("64")
    const [wind, setWind] = useState("18")
    const [temprature, setTemprature] = useState("24")
    const [location, setLocation] = useState("London")
    const apiKey = "d6fe4a1d2769cc49b7114c727405769e";
    const [wicon, setWicon] = useState(cloud_icon);
    const searchLocation = async () => {

        console.log(search, "test")
        if (search === " ") {
            alert("Enter the City");
        }
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=${apiKey}`;
        let responses = await fetch(apiUrl);
        let data = await responses.json();


        // const humidity = document.getElementsByClassName("humidity-percentage");
        // const wind = document.getElementsByClassName("wind-rate");
        // const temprature = document.getElementsByClassName("weather-temp");
        // const location = document.getElementsByClassName("weather-location");
        // humidity[0] = data?.main?.humidity;
        // wind[0].innerHTML = data?.wind?.speed;
        // temprature[0].innerHTML = data?.main?.temp;
        // location[0].innerHTML = data?.name;
        console.log(data)
        setHumidity(data?.main?.humidity);
        setWind(Math.floor(data?.wind?.speed));
        setTemprature(Math.floor(data?.main?.temp));
        setLocation(data?.name)
        console.log(data?.main?.humidity);

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "0ln") {
            setWicon(clear_icon);
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(cloud_icon);
        } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rain_icon);
        } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setWicon(rain_icon);
        } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon);
        }


    }
    return (
        <div className='container glass'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder='Search City' onChange={(e) => { setsearch(e.target.value) }} />
                <div className='search-icon' onClick={() => { searchLocation() }}>
                    <img src={search_icon} alt='' />
                </div>
            </div>
            <div className='weather-image'>
                <img src={wicon} />
            </div>
            <div className='weather-temp'>{temprature} °c </div>
            <div className='weather-location'>{location}</div>
            <div className='data-container'>
                <div className="element">
                    <img src={humidity_icon} className='icon' />
                    <div className='data'>
                        <div>{humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} className='icon' />
                    <div className='data'>
                        <div className="wind-rate">{wind} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
