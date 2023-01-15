import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Weather(props) {
  const [data, setData] = useState({ set: false });
  const [city, setCity] = useState(props.city);
  function handleSubmit(event) {
    event.oreventDefault();
    search();
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
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "cd013e8d2828a91054e6ea3c9fd85485";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayDescription);
  }

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
          <WeatherInfo data={data} city={city} />
        </div>
      </div>
    );
  } else {
    search();
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
