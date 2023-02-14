import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
import MainLayout from './shared/layouts/MainLayout';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </BrowserRouter>
    </AppThemeProvider>
  );
};