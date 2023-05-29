import { createTheme } from "@mui/material/styles";

const PrimaryMainTheme = createTheme({
  typography: {},
  palette: {
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      focus: "rgba(255, 255, 255, 0.12)",
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
    },
    info: { main: "#fff" },
    // background: {
    //   default: "#2f2888",
    //   paper: "#2f2888",
    // },

    // common: {
    //   black: "#fff",
    //   white: "#2f2888",
    // },

    primary: {
      light: "#fff",
      main: "#fff",
    },
    text: { primary: "#fff" },
  },
});

export { PrimaryMainTheme };
