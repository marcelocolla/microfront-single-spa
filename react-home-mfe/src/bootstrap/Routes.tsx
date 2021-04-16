import React from "react";

import { Switch, Route } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Menu from "../components/Menu";
import Dashboard from "../pages/Dashboard";

const Routes = (): JSX.Element => {
  return (
    <Grid container>
      <Grid container item xs={2}>
        <Menu />
      </Grid>
      <Grid container item xs={10}>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/users">
            <Typography variant="h3">Users</Typography>
          </Route>
          <Route path="/product">
            <Typography variant="h3">Product</Typography>
          </Route>
        </Switch>
      </Grid>
    </Grid>
  );
};

export default Routes;
