import { Navigate, Route, Routes } from 'react-router-dom';
import AuthorPage from '../modules/author/pages/Author';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/authors" element={<AuthorPage />} />
      <Route path="*" element={<Navigate to="/authors" />} />
    </Routes>
  );
};
