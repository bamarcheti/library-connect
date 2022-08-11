import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from './../themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface IAppThemeProviderProps {
  children: React.ReactNode
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);


  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};



// import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
// import { IconButton, ThemeProvider, useTheme } from '@mui/material';
// import { Box } from '@mui/system';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

// import { DarkTheme, LightTheme } from './../themes';

// interface IThemeContextData {
//   themeName: 'light' | 'dark';
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext({} as IThemeContextData);

// function MyApp() {
//   const theme = useTheme();

//   const colorTheme = React.useContext(ThemeContext);

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       <IconButton sx={{ ml: 1 }} onClick={colorTheme.toggleTheme} color="inherit">
//         {theme.palette.themeName === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//     </Box>
//   );
// }

// export const useAppThemeContext = () => {
//   return useContext(ThemeContext);
// };

// interface IAppThemeProviderProps {
//   children: React.ReactNode
// }

// export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
  
//   const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

//   const toggleTheme = useCallback(() => {
//     setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
//   }, []);

//   const theme = useMemo(() => {
//     if (themeName === 'light') return LightTheme;

//     return DarkTheme;
//   }, [themeName]);


//   return (
//     <ThemeContext.Provider value={{ themeName, toggleTheme }}>
//       <ThemeProvider theme={theme}>
//         <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
//           <MyApp />
//           {children}
//         </Box>
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };