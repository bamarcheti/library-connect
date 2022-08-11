import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

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
      main: blue[300],
      dark: blue[400],
      light: blue[200],
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  },
  typography: {
    allVariants: {
      color: 'white',
    }
  }
});