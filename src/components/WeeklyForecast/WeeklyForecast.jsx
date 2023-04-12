import React from "react";
import weatherCodes from "../../weatherCodes";
import "./WeeklyForecast.css";

const WeeklyForecast = ({
  temperature_2m_max: max,
  temperature_2m_min: min,
  time,
  weathercode,
  tempUnit,
}) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];

  return (
    <div className="WeekContainer">
      {time.map((date, index) => (
        <div className="GridContainer" key={index}>
          <p className="GridItemCenter">{weekDays[new Date(date).getDay()]} </p>
          <img
            className="WeeklyForecastIcon"
            src={`./icons/animated/${weathercode[index] + 100}.svg`}
            alt={weatherCodes[weathercode[index]]}
          />
          <p className="GridItemCenter">
            {Math.round(max[index])}
            {tempUnit}
          </p>
          <p className="GridItemCenter">
            {Math.round(min[index])}
            {tempUnit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
