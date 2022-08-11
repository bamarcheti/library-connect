import Box from '@mui/material/Box';
import React from 'react';
import { Menu } from '../components/Menu/Menu';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box justifyContent="center">
      <Menu />
      <div>{children}</div>
    </Box>
  );
};

export default MainLayout;
