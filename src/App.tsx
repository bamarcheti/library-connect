/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
import MainLayout from './shared/layouts/MainLayout';


export const App = () => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AppThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </BrowserRouter>
    </AppThemeProvider>
  );
};