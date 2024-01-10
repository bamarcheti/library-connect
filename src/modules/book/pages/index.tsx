import { Card } from '@mui/material';
import fs from 'fs';
import { useEffect, useState } from 'react';
import MainTitle from '../../../shared/components/MainTitle';
import BookForm from './BookForm/BookForm';
import BookTable from './BookTable/BookTable';
import './style.css';

const BookPage = () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    const getBooks = () => {
      const books = readJsonFile('../json/books.json');
      setBooksList(books);
    };

    getBooks();
  }, []);

  const handleOnChange = async () => {
    const books = readJsonFile('../json/books.json');
    setBooksList(books);
  };

  const readJsonFile = (filePath: string) => {
    try {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileData);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <div className="boxBook">
      <MainTitle title="GERENCIAR LIVROS" />

      <div>
        <Card className="cardLeftBook" variant="outlined">
          <BookForm onChange={handleOnChange} />
        </Card>

        <Card className="cardRightBook" variant="outlined">
          <BookTable booksList={booksList} />
        </Card>
      </div>
    </div>
  );
};

export default BookPage;
