import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Stack,
  useTheme
} from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppThemeContext } from '../../contexts';


export const Menu = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { toggleTheme } = useAppThemeContext();
  const navigate = useNavigate();

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: '#25B79D',
          fontFamily: 'Roboto',
          width: '100%',
        }}
      >
        <Stack>
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Stack>
        <BottomNavigationAction label="AUTORES" onClick={() => {navigate('/authors');}} />
        <BottomNavigationAction label="LIVROS" onClick={() => {navigate('/books');}} />
      </BottomNavigation>
    </Box>
  );
};
