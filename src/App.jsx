import { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

import {
  getCurrentWeather,
  getForecast,
} from "./api/weather";

import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSearch(city) {
    setLoading(true);
    setError("");
    try {
      const [current, days] = await Promise.all([
        getCurrentWeather(city),
        getForecast(city),
      ]);
      setWeather(current);
      setForecast(days);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Weather App</h1>
          <p className="subtitle">
            Simple forecasts for any city
          </p>
        </div>
      </header>
      <SearchBar
        onSearch={handleSearch}
        loading={loading}
      />
      {error && (
        <p className="error">
          {error}
        </p>
      )}
      {weather && (
        <WeatherCard data={weather} />
      )}
      <Forecast days={forecast} />
      {!weather && !error && !loading && (
        <p className="hint">
          Search for a city to see the weather.
        </p>
      )}
    </div>
  );
}