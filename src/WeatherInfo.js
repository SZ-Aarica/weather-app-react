import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcone from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-4 ms-1 text-center">
          {props.city}
          <div className="temp-data mt-3">
            Tempature:{Math.round(props.data.temp)} °C
            <br />
            <FormattedDate date={props.data.date} />
            <br />
            date
            <br />
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
         <WeatherIcone code={props.data.icon} />
          </div>
        </div>
        <div className="col-3 border border-primary mb-3 text-center">
          forcast
        </div>
      </div>
    </div>
  );
}
