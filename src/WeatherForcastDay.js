import React from "react";
import WeatherIcone from "./WeatherIcon";

export default function WeatherForcastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForcastDay">
      <ul>
        <li>
          <h3>Forcast</h3>
        </li>
        <br />
        <li>
          <span className="date">{day()}</span>
          <WeatherIcone code={props.data.weather[0].icon} size={40} />
          <br />
          <span className="Min">{Math.round(props.data.temp.min)}° </span>/ 
          <span className="Max"> {Math.round(props.data.temp.max)}°</span>
        </li>
        <li>day 2</li>
        <li>day 3</li>
        <li>day 4</li>
        <li>day 5</li>
      </ul>
    </div>
  );
}
