import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f7afc",
    },
    secondary: {
      main: "#ff6b6b",
    },
    background: {
      default: "#f5f6fa",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif, Montserrat",
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;