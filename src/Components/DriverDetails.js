import React from "react";
import { Link } from "react-router-dom";

function DriverDetails({ driver }) {
  console.log(driver);
  return (
    <div className="container mt-5 driver-container">
      <div className="row align-items-center">
        <div className="col">
          <div className="driver-card card text-center">
            <div className="card-header">
              <h1 className="display-4">{driver.name}</h1>
            </div>
            <img
              src={driver.img}
              alt={driver.name}
              className="card-img-top mx-auto"
            />
            <div className="card-body">
              <h5 className="card-title bg-primary p-2">2020 Season Recap</h5>
              <p className="card-text">{driver.seasonRecap}</p>
            </div>
            <div className="card-body">
              <h5 className="card-title bg-light text-dark p-2">2021 Stats</h5>
              <ul className="list-group-flush p-0">
                <li className="list-group-item">Wins : {driver.wins}</li>
                <li className="list-group-item">
                  Top 10 finishes: {driver.topTen}
                </li>
                <li className="list-group-item">Points: {driver.points}</li>
              </ul>
              <Link to="/drivers" className="btn btn-info mt-3">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverDetails;
