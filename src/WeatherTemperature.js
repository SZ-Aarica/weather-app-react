import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function fahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function Calculatefahrenheit() {
    return props.celsius * 9.5 + 32;
  }
  function celsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <span className="display-1">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a onClick={fahrenheit} href="/">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemp = Calculatefahrenheit(); 
    return (
      <div>
        {" "}
        <span className="display-1">{Math.round(fahrenheitTemp)}</span>{" "}
        <span className="unit">
          {" "}
          <a onClick={celsius} href="/">
            °C{" "}
          </a>{" "}
          | °F{" "}
        </span>
      </div>
    );
  }
}
