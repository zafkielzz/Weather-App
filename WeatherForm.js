import React from "react";

function WeatherForm({ city, setCity, fetchWeather }) {
  return (
    <div className="input-group">
      <input
        type="text"
        id="city-input"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button id="search-btn" onClick={fetchWeather}>
        Search
      </button>
    </div>
  );
}

export default WeatherForm;
