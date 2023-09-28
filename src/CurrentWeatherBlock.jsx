export default function CurrentWeatherBlock({ dataset }) {
  const locationName = dataset.location.name;
  const locationRegion = dataset.location.region;
  const currentlyTemp = Math.round(dataset.current["temp_f"]);
  const feelsLikeTemp = Math.round(dataset.current["feelslike_f"]);
  const humidity = Math.round(dataset.current["humidity"]);
  const wind = Math.round(dataset.current["gust_mph"]);

  return (
    <div class="current-day">
      <div class="forecast-day-header">
        Right now in {locationName}, {locationRegion}
      </div>
      <div class="forecast-day-subheader">Partly cloudy</div>
      <div class="databit">
        <div class="databit-header">Currently</div>
        <div class="databit-content">{currentlyTemp}°f</div>
      </div>
      <div class="databit">
        <div class="databit-header">Feels like</div>
        <div class="databit-content">{feelsLikeTemp}°f</div>
      </div>
      <div class="databit">
        <div class="databit-header">Wind</div>
        <div class="databit-content">{wind} mph</div>
      </div>
      <div class="databit">
        <div class="databit-header">Humidity</div>
        <div class="databit-content">{humidity}%</div>
      </div>
    </div>
  );
}
