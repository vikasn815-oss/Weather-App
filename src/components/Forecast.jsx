import { weatherIcons } from "../assets/weatherIcons";

export default function Forecast({ days }) {
  if (days.length === 0) {
    return null;
  }
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-row">
        {days.map((day) => {
          const iconKey =
            day.weather[0].icon.slice(0, 2);
          const weatherImage =
            weatherIcons[iconKey] ||
            weatherIcons["01"];
          return (
            <div
              className="forecast-item"
              key={day.dt}
            >
              <p>
                {new Date(
                  day.dt * 1000
                ).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "short",
                  }
                )}
              </p>
              <img
                className="forecast-icon"
                src={weatherImage}
                alt={day.weather[0].description}
              />
              <p>
                <strong>
                  {Math.round(day.main.temp)}
                  &deg;C
                </strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}