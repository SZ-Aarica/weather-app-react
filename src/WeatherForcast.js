import React from "react";
import "./WeatherForcast.css";
import WeatherIcone from "./WeatherIcon";

export default function WeatherForcast() {
  return (
    <div className="WeatherForcast">
      <ul>
        <li>
          <h3>Forcast</h3>
        </li>
        <br />
        <li>
          day 1 <WeatherIcone code="01d" size={40} />
          min/max
        </li>
        <li>day 2</li>
        <li>day 3</li>
        <li>day 4</li>
        <li>day 5</li>
      </ul>
    </div>
  );
}
