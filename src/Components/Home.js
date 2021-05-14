import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h2 className="display-3">Welcome to the NASCAR driver database</h2>
        </div>
      </div>
      <div className="col">
        <h3 className="display-4 mt-5">Latest News:</h3>
        <p className="lead">
          Martin Truex Wins at Darlington, 3rd win of season
        </p>
      </div>
    </div>
  );
}

export default Home;
