import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#6497b1",
      contrastText: "#ffcc00"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    // secondary: {
    //   light: "#0066ff",
    //   main: "#0044ff",
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: "#ffcc00"
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    h1: {
      color: "#eee"
    },
    h2: {
      color: "#eee"
    },
    h3: {
      color: "#eee"
    },
    h4: {
      color: "#eee"
    },
    h5: {
      color: "#eee"
    },
    h6: {
      color: "#eee"
    },
    body2: {
      color: "#eee"
    },
    body1: {
      color: "#eee"
    }
  }
});

export default theme;
