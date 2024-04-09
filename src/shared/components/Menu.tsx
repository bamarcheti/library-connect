import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppThemeContext } from '../contexts/ThemeContexts';

export const Menu = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { toggleTheme } = useAppThemeContext();
  const navigate = useNavigate();
  const bottomNavBackground = '#10977e';
  const bottomNavActionBackground = '#42dbc0';

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: bottomNavBackground,
          fontFamily: 'Roboto',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Stack>
          <IconButton
            color="inherit"
            sx={{ justifyContent: 'center' }}
            onClick={toggleTheme}
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Stack>
        <BottomNavigationAction
          sx={{ '&:hover': { color: bottomNavActionBackground } }}
          label="AUTORES"
          onClick={() => {
            navigate('/authors');
          }}
        />
        <BottomNavigationAction
          sx={{ '&:hover': { color: bottomNavActionBackground } }}
          label="LIVROS"
          onClick={() => {
            navigate('/books');
          }}
        />
      </BottomNavigation>
    </Box>
  );
};
