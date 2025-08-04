// File: src/App.js
import React, { useState } from "react";
import "./index.css";
import WeatherForm from "./WeatherForm";
import WeatherResult from "./WeatherResult";

const apiKey = "5862e518ae0c8f64992df30472830ee5";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    const cityName = city.trim();
    if (!cityName) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>🌤️ Weather App</h1>
      <WeatherForm city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <WeatherResult weather={weather} error={error} />
    </div>
  );
}

export default App;
