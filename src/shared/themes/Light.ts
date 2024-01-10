import { createTheme } from '@mui/material';

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
      main: '#FFFF',
      dark: '#DDDD',
      light: '#DDDD',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f7f6f3',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontSize: '25px',
      display: 'flex',
      alignItems: 'flex-end',
      color: '#4F4F4F',
    },
    h2: {
      fontFamily: 'Roboto',
      fontStyle: 'medium',
      fontSize: '14px',
      display: 'flex',
      lineHeight: '24px',
      color: '#4F4F4F',
    },
  },
});
