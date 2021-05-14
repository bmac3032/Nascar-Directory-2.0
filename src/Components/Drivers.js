import React from "react";
import driverData from "../data/driverData";

function Drivers() {
  return (
    <div className="container">
      {driverData.map((d) => (
        <div className="card m-2">
          <div className="card-body">
            <h5 className="card-title">{d.name}</h5>
            <p className="card-text">Car Number {d.number}</p>
            <p className="card-text">Team: {d.team}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Drivers;
