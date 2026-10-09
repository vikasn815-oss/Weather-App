import { useState } from "react";
import searchIcon from "../assets/weather/search.png";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim() === "") {
      return;
    }
    onSearch(city.trim());
  }
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        <img
          src={searchIcon}
          alt=""
          className="search-icon"
        />
        {loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
}