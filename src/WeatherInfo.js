import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcone from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForcast from "./WeatherForcast";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo ">
      <div className="row mt-4">
        <div className="col-4 ms-1 text-center ">
          <div className="city"> {props.city}</div>

          <WeatherTemperature celsius={props.data.temp} />

          <div className="data mt-3">
            <FormattedDate date={props.data.date} />
            <br />
            {props.data.description}
            <br />
            humidity:{props.data.humidity}
            <br />
            wind:{props.data.wind}
          </div>
        </div>
        <div className="col-4">
          <button className="mb-4 p-1">current location</button>
          <div className="pic mb-3 ">
            {" "}
            <WeatherIcone code={props.data.icon} size={100}/>
          </div>
        </div>
        <div className="col-3 mb-3 text-center forcast">
          <WeatherForcast />
        </div>
      </div>
    </div>
  );
}
