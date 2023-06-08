import React from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Welcome from "./Welcome";

function Home() {
  return <Typography variant="h3">Home</Typography>;
}

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/support" component={Welcome} />
    </Switch>
  );
}

export default Routes;
