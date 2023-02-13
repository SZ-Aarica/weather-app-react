import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForcast.css";

import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast(props) {
  const [ready, setReady] = useState(false);
  let [forcast, setForcast] = useState(null);

  function handleResponse(response) {
    setForcast(response.data.daily);
    leaded();
    setReady(true);
  }
  function leaded() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  if (ready) {
    return (
      <div className="WeatherForcast">
        {forcast.map(function (dailyForcast, index) {
          if (index < 6) {
            return (
              <div key={index}>
                <WeatherForcastDay data={dailyForcast} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    leaded();
    return "Forcast loading";
  }
}
