import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const navContainerWidth = 300;

const useStyles = makeStyles((theme) =>
  createStyles({
    navContainer: {
      width: navContainerWidth,
      flexShrink: 0,
    },
    navContainerPaper: {
      width: navContainerWidth,
    },
    navHeader: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function SideNav() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.navContainer}
      variant="permanent"
      classes={{ paper: classes.navContainerPaper }}
      anchor="left"
    >
      <div className={classes.navHeader}>
        <Typography variant="h6">Sidenav</Typography>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/support">
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </Drawer>
  );
}
