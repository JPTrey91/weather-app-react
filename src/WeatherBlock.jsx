function getMonthFromNumberString(monthString) {
  let month;
  switch (monthString) {
    case "01":
      month = "January";
      break;
    case "02":
      month = "February";
      break;
    case "03":
      month = "March";
      break;
    case "04":
      month = "April";
      break;
    case "05":
      month = "May";
      break;
    case "06":
      month = "June";
      break;
    case "07":
      month = "July";
      break;
    case "08":
      month = "August";
      break;
    case "09":
      month = "September";
      break;
    case "10":
      month = "October";
      break;
    case "11":
      month = "November";
      break;
    case "12":
      month = "December";
      break;
  }
  return month;
}

export default function WeatherBlock({ dayData, isToday }) {

    const date = dayData.date.slice(8,10);
    const month = getMonthFromNumberString(dayData.date.slice(5,7));
    const condition = dayData.day.condition.text;
    const maxTemp = dayData.day['maxtemp_f'];
    const minTemp = dayData.day['mintemp_f'];
    const humidity = dayData.day['avghumidity'];
    const wind = dayData.day['maxwind_mph'];
    const visibility = dayData.day['avgvis_miles'];
    const rainChance = dayData.day['daily_chance_of_rain'];
    const snowChance = dayData.day['daily_chance_of_snow'];
    const totalPrecip = dayData.day['totalprecip_in'];

  return (
    <div class="forecast-day">
      <div class="forecast-day-header">{ isToday ? 'Today' : `${month} ${date}` }</div>
      <div class="forecast-day-subheader">{condition}</div>
      <div class="databit">
        <div class="databit-header">High</div>
        <div class="databit-content">{maxTemp}°f</div>
      </div>
      <div class="databit">
        <div class="databit-header">Low</div>
        <div class="databit-content">{minTemp}°f</div>
      </div>
      <div class="databit">
        <div class="databit-header">Humidity</div>
        <div class="databit-content">{humidity}%</div>
      </div>
      <div class="databit">
        <div class="databit-header">Wind</div>
        <div class="databit-content">{wind} mph</div>
      </div>
      <div class="databit">
        <div class="databit-header">Visibility</div>
        <div class="databit-content">{visibility} mi</div>
      </div>
      <div class="databit">
        <div class="databit-header">Rain chance</div>
        <div class="databit-content">{rainChance}%</div>
      </div>
      <div class="databit">
        <div class="databit-header">Snow chance</div>
        <div class="databit-content">{snowChance}%</div>
      </div>
      <div class="databit">
        <div class="databit-header">Total precip.</div>
        <div class="databit-content">{totalPrecip} in</div>
      </div>
    </div>
  );
}
