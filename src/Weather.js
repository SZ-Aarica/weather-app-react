import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import sunlight from "./sunlight.svg";

export default function Weather() {
  return (
    <div className="container">
      <div className="Weather  border border-primary">
        <form className="m-3 hi">
          <input type="submit" value="🔍" className="p-2 submit" />
          <input type="serach" placeholder="search a city" className="p-2" />
        </form>
        <div className="row mt-4">
          <div className="col-4 ms-1 text-center">
            city name
            <div className="temp-data mt-3">
              6 C
              <br />
              day
              <br />
              date
              <br />
              <br />
              description
              <br />
              humidity
              <br />
              wind
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
}
