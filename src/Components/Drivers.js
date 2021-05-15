import React from "react";
import driverData from "../data/driverData";
import { Link } from "react-router-dom";

function Drivers() {
  return (
    <div className="container">
      <div className="row">
        {driverData.map((d) => (
          <div className="col-lg-4 ">
            <Link to={`/drivers/${d.id}`}>
              <div
                className="driver-card card m-2 align-items-center"
                key={d.id}
              >
                <img src={d.img} alt={d.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{d.name}</h5>
                  <p className="card-text">Car Number {d.number}</p>
                  <p className="card-text">Team: {d.team}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drivers;
