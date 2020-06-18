import React, { useState } from "react";
import Header from "./containers/Header";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import DrawScreen from "./containers/DrawScreen";
import Gallery from "./containers/Gallery";

const data = {};

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: "#343d46", width: "100vw", height: "100vh" }}>
        <Header tabIndex={tabIndex} onTabChange={setTabIndex} />
        {!tabIndex ? <DrawScreen /> : <Gallery />}
      </div>
    </ThemeProvider>
  );
}

export default App;
