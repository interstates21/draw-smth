import React, { FC, useState, useRef, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CanvasDraw from "react-canvas-draw";

interface Props {}

const DrawScreen = (props: Props) => {
  const ref = useRef(null);

  const handleSubmit = () => {
    if (ref) {
      const data = ref.current.getSaveData();

      var destinationContext = ref.getContext("2d");
      destinationContext.drawImage(sourceCanvas, 0, 0);
      destinationContext.globalCompositeOperation = "destination-over";
      destinationContext.fillStyle = "black";
      destinationContext.fillRect(0, 0, ref.width, ref.height);

      var image = destinationCanvas.toDataURL("image/png");
      console.log("data = ", image);
    }
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <CanvasDraw
        brushColor="rgba(155,12,60,0.3)"
        canvasWidth={"100%"}
        canvasHeight={"90%"}
        ref={ref}
      />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>
        Secondary
      </Button>
    </div>
  );
};

export default DrawScreen;
