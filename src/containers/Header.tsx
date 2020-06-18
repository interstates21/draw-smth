import React, { FC, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  label: {
    color: "#eee"
  }
}));

interface IProps {
  tabIndex: Number;
  onTabChange: (Number) => void;
}

const Header: FC<IProps> = ({ tabIndex, onTabChange }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    onTabChange(newValue);
  };

  return (
    <AppBar position="static" color="default">
      <Tabs
        style={{ backgroundColor: "#343d46" }}
        value={tabIndex}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        color="secondary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Item One" className={classes.label} elevation={0} />
        <Tab label="Item Two" className={classes.label} elevation={0} />
      </Tabs>
    </AppBar>
  );
};

export default Header;
