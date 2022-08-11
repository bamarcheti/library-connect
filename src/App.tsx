/* eslint-disable linebreak-style */
import React, { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from './shared/contexts';
import { MenuTopo } from './shared/components/menu-topo/MenuTopo';
import { AppRoutes } from './routes';


export const App = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AppThemeProvider>
      <BrowserRouter>
        <MenuTopo>
          <AppRoutes />
        </MenuTopo>
      </BrowserRouter>
    </AppThemeProvider>
  );
};