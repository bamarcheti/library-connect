import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#25B79D',
      dark: '#36cfb3',
      light: '#42dbc0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: blue[300],
      dark: blue[400],
      light: blue[200],
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3',
    },
  },
  typography: {
    h1: {
      color: '#4F4F4F',
      fontFamily: 'Roboto',
      fontSize: '25px',
    },
  },
});
