import { Navigate, Route, Routes } from 'react-router-dom';
import AuthorPage from '../modules/author/pages/Author';
import BookPage from '../modules/book/pages/index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/authors" element={<AuthorPage />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="*" element={<AuthorPage />} />
    </Routes>
  );
};
