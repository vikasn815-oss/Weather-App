import { weatherIcons } from "../assets/weatherIcons";

import humidityIcon from "../assets/weather/humidity.png";
import windIcon from "../assets/weather/wind.png";

export default function WeatherCard({ data }) {
  const iconKey = data.weather[0].icon.slice(0, 2);
  const weatherImage =
    weatherIcons[iconKey] || weatherIcons["01"];
  return (
    <div className="card">
      <h2>
        {data.name}, {data.sys.country}
      </h2>
      <img
        className="weather-image"
        src={weatherImage}
        alt={data.weather[0].description}
      />
      <p className="temp">
        {Math.round(data.main.temp)}&deg;C
      </p>
      <p className="desc">
        {data.weather[0].description}
      </p>
      <div className="details">
        <div className="detail-item">
          <img
            src={humidityIcon}
            alt=""
            className="detail-icon"
          />
          <span>Humidity</span>
          <strong>
            {data.main.humidity}%
          </strong>
        </div>
        <div className="detail-item">
          <img
            src={windIcon}
            alt=""
            className="detail-icon"
          />
          <span>Wind</span>
          <strong>
            {data.wind.speed} m/s
          </strong>
        </div>
      </div>
    </div>
  );
}