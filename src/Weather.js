import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import sunlight from "./sunlight.svg";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Weather() {
  const [data, setData] = useState({ set: false });
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.oreventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayDescription(response) {
    setData({
      set: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
  axios.get(url).then(displayDescription);

  if (data.set) {
    return (
      <div className="container">
        <div className="Weather  border border-primary">
          <form className="m-3 hi" onSubmit={handleSubmit}>
            <input
              type="submit"
              value="🔍"
              className="p-2 submit"
              onChange={updateCity}
            />
            <input type="serach" placeholder="search a city" className="p-2" />
          </form>
          <WeatherInfo />
          <div className="row mt-4">
            <div className="col-4 ms-1 text-center">
              {city}
              <div className="temp-data mt-3">
                Tempature:{Math.round(data.temp)} °C
                <br />
                <FormattedDate date={data.date} />
                <br />
                date
                <br />
                <br />
                {data.description}
                <br />
                humidity:{data.humidity}
                <br />
                wind:{data.wind}
              </div>
            </div>
            <div className="col-4">
              <button className="mb-4 p-1">current location</button>
              <div className="pic mb-3 ">
                {" "}
                <img className="img-fluid" src={sunlight} alt="the sunlight" />
              </div>
            </div>
            <div className="col-3 border border-primary mb-3 text-center">
              forcast
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    );
  }
}