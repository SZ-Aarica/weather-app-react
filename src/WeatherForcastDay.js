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
      {" "}
    
      <ul>
        <br />
        <li>
          <span className="date">{day()} </span>
          <WeatherIcone code={props.data.weather[0].icon} size={35} />
          <br />
          <span className="Min">{Math.round(props.data.temp.min)}° </span>/
          <span className="Max"> {Math.round(props.data.temp.max)}°</span>
        </li>
      </ul>
    </div>
  );
}
