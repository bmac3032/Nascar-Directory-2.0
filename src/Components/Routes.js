import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Drivers from "./Drivers";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/drivers" component={Drivers} />
    </Switch>
  );
}

export default Routes;
