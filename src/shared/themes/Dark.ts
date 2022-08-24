import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#25B79D',
      dark: '#36cfb3',
      light: '#42dbc0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#64b5f6',
      dark: '#42a5f5',
      light: '#90caf9',
      contrastText: '#FFFFFF',
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
      color: '#FFFFFF',
      fontFamily: 'Roboto',
      fontStyle: 'medium',
      fontSize: '14px',
      lineHeight: '24px'
    },
  },
});
