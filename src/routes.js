import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default Routes;
