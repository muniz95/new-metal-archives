import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
  cssVariables: true,
  palette: {
    // background: {
    //   default: '#000000',
    // },
    mode: "dark",
    primary: {
      main: '#A2787a',
    },
    secondary: {
      main: '##6d3f40',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
