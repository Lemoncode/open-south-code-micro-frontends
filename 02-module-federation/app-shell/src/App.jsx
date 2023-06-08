import React from "react";
import { HashRouter } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core";
import Routes from "./Routes";
import SideNav from "./SideNav";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <HashRouter>
      <div className={classes.root}>
        <SideNav />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
