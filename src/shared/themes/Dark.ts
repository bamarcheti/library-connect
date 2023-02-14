import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#25B790',
      dark: '#36cfb3',
      light: '#42dbc0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFF',
      dark: '#DDDD',
      light: '#DDDD'
    },
    background: {
      paper: '#303134',
      default: '#202124',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontSize: '25px',
      display: 'flex',
      alignItems: 'flex-end',
      color: '#FFFFFF',
    },
    h2: {
      fontFamily: 'Roboto',
      fontStyle: 'medium',
      fontSize: '20px',
      display: 'flex',
      lineHeight: '24px',
      color: '#FFFFFF'
    },
  },
});
