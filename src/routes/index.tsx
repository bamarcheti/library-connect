import { Navigate, Route, Routes } from 'react-router-dom';
import AuthorPage from '../modules/author/pages/Author';
import BookPage from '../modules/book/pages/Book/index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/authors" element={<AuthorPage />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="*" element={<Navigate to="/authors" />} />
    </Routes>
  );
};
