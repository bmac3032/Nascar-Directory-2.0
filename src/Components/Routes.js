import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Drivers from "./Drivers";
import DriverDetails from "./DriverDetails";
import driverData from "../data/driverData";

function Routes() {
  const getDriver = (props) => {
    let id = parseInt(props.match.params.id);
    let currentDriver = driverData.find((d) => d.id === id);
    return <DriverDetails {...props} driver={currentDriver} />;
  };
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/drivers" component={Drivers} />
      <Route exact path="/drivers/:id" render={getDriver} />
    </Switch>
  );
}

export default Routes;
