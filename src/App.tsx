import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  const [val, setVal] = useState(0);

  const handleChange = (event, newValue) => {
    setVal(newValue);
  };

  return (
    <AppBar position="static" color="default">
      <Tabs
        value={val}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        color="secondary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
  );
};
function App() {
  return (
    <div style={{ background: "#343d46", width: "100vw", height: "100vh" }}>
      <Header />
    </div>
  );
}

export default App;
