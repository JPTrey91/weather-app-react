import { useState } from "react";
import "./App.css";
import CurrentWeatherBlock from "./CurrentWeatherBlock";
import WeatherBlock from "./WeatherBlock";
const WEATHER_API_URL =
  "https://api.weatherapi.com/v1/forecast.json?key=2e21eea24f714bb4a65154936231909&q=";

function App() {
  const [location, setLocation] = useState("");
  const [days, setDays] = useState(1);
  const [weatherData, setWeatherData] = useState({});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchWeatherData() {
    setIsLoading(true);
    try {
      const weatherResponse = await fetch(
        `${WEATHER_API_URL}${location}&days=3&aqi=no&alerts=no)`,
        { mode: "cors" }
      );
      const newWeatherData = await weatherResponse.json();
      setWeatherData(newWeatherData);
    } catch (error) {
      setErrors([...errors, "Please enter a valid postal code"]);
    }
    setIsLoading(false);
  }

  return (
    <>
      <div id="content">
        <h1>Weather</h1>
        <div id="form">
          <div class="inputs">
            <div class="label-input-pair">
              <label for="location">ZIP Code</label>
              <input
                id="location"
                name="location"
                type="number"
                pattern="[0-9]{5}"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div class="label-input-pair">
              <label for="days">Days</label>
              <select
                id="days"
                name="days"
                type="text"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <button
            id="get-weather"
            className={location.length === 5 ? "active" : "inactive"}
            onClick={() => fetchWeatherData(location)}
          >
            Get Weather
          </button>
        </div>
        <div id="weather-forecast">
          {isLoading ? <p>Loading...</p> : null}

          {errors.length > 0 ? (
            <p className="error">{errors[errors.length - 1]}</p>
          ) : null}

          {Object.keys(weatherData).length > 1 ? (
            <>
              <CurrentWeatherBlock dataset={weatherData} />

              {weatherData.forecast.forecastday.map((dayInfo, index) => {
                if (index < days)
                  return <WeatherBlock dayData={dayInfo} isToday={index === 0} />;
              })}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
