import React from "react";
export default function FormattedDate(props) {
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  let day = days[props.date.getDay()];
 
  let hours = props.date.getHours();
  let min = props.date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div>
      {day}<br />
      {hours} : {min}
    </div>
  );
}
