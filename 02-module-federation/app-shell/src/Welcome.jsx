import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flex: 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const Dialog = React.lazy(() => import("app_user_support/Dialog"));

const Welcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h4">User Support</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <React.Suspense fallback="Loading Dialog...">
          <Dialog />
        </React.Suspense>
      </div>
    </div>
  );
};

export default Welcome;
