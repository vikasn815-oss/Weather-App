const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5";

async function request(url) {
  const res = await fetch(url);

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error("City not found. Check the spelling.");
    }

    if (res.status === 401) {
      throw new Error("Invalid or inactive API key.");
    }

    throw new Error("Something went wrong. Try again.");
  }

  return res.json();
}

export function getCurrentWeather(city) {
  const url =
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}` +
    `&units=metric&appid=${API_KEY}`;

  return request(url);
}

export async function getForecast(city) {
  const url =
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}` +
    `&units=metric&appid=${API_KEY}`;

  const data = await request(url);

  return data.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
}