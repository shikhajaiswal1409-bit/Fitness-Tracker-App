import { createTheme } from "@mui/material/styles";


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3f7afc",
//     },
//     secondary: {
//       main: "#ff6b6b",
//     },
//     background: {
//       default: "#f5f6fa",
//     },
//   },

//   typography: {
//     fontFamily: "Poppins, sans-serif, Montserrat",
//   },

//   shape: {
//     borderRadius: 12,
//   },
// });


const theme = createTheme({
  palette: {
    primary: { main: "#4F46E5" },   // modern indigo
    secondary: { main: "#F43F5E" }, // soft red
    background: { default: "#F9FAFB" },
  },

  typography: {
    fontFamily: "Inter, Poppins, sans-serif",
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { color: "#6B7280" }
  },

  shape: {
    borderRadius: 16,
  },
});

export default theme;
