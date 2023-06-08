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

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const getRandomValue = () => `${Date.now()}-${makeid(5)}`;

function App() {
  const classes = useStyles();

  React.useEffect(() => {
    const bc = new BroadcastChannel("main_channel");
    const randomValue = getRandomValue();
    const interval = setInterval(() => {
      console.log("sending message");
      // bc.postMessage("This is a message from main");
      bc.postMessage(`This is a message from main ${randomValue}`);
    }, 5_000);

    return () => {
      bc.close();
      clearInterval(interval);
    };
  }, []);

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
