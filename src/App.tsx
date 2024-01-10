import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/ThemeContexts';
import MainLayout from './shared/layouts/MainLayout';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
