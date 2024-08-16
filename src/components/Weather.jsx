import React, { useEffect, useState, useRef } from "react";
import "./Weather.css";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
}

const allIcons = {
  "01d": clear_icon,
  "01n": clear_icon,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": drizzle_icon,
  "04n": drizzle_icon,
  "09d": rain_icon,
  "09n": rain_icon,
  "10d": rain_icon,
  "10n": rain_icon,
  "13d": snow_icon,
  "13n": snow_icon,
};

const search = async (city) => {
  if (city === "") {
    alert("Enter City Name");
    return;
  }

  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    if (!weatherResponse.ok) {
      alert(weatherData.message);
      return;
    }

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    if (!forecastResponse.ok) {
      alert(forecastData.message);
      return;
    }

    console.log(weatherData);
    const icon = allIcons[weatherData.weather[0].icon] || clear_icon;
    setWeatherData({
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
      temperature: Math.floor(weatherData.main.temp),
      location: weatherData.name,
      icon: icon,
    });

    const dailyForecast = forecastData.list.filter((reading) =>
      reading.dt_txt.includes("12:00:00")
    );
    setForecastData(dailyForecast);

  } catch (error) {
    setWeatherData(false);
    console.error("Error in fetching weather data:", error);
  }
};

const addFavorite = () => {
    if (weatherData && !favorites.some(fav => fav.location === weatherData.location)) {
      setFavorites([...favorites, weatherData]);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

   return (
    <div className="weather-container">
      <div className={isDarkMode ? "weather dark-mode" : "weather"}>
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search" />
          <img
            src={search_icon}
            alt="Search Icon"
            onClick={() => search(inputRef.current.value)}
          />
        </div>
        {weatherData ? (
          <>
            <img src={weatherData.icon} alt="Weather Icon" />
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="Humidity Icon" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="Wind Icon" />
                <div>
                  <p>{weatherData.windSpeed} Km/hr</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
            <button onClick={addFavorite}>Add to Favorites</button>