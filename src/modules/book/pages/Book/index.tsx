import { Card } from '@mui/material';
import MainTitle from '../../../../shared/components/MainTitle/MainTitle';
import BookForm from './BookForm/BookForm';
import BookTable from './BookTable/BookTable';
import { useState, useEffect } from 'react';
import bookService, { Book } from '../../services/bookService';
import { CreateBookDto } from '../../dtos/CreateBookDto';
import './style.css';

const BookPage = () => {
  const [booksList, setBooksList] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await bookService.getBooks();
      setBooksList(response);
    };
    getBooks();
  }, []);

  const handleOnChange = async (createBook: CreateBookDto) => {
    const response = await bookService.getBooks();
    setBooksList(response);
  };

  return (
    <div className='boxBook'>
      <MainTitle title='GERENCIAR LIVROS' />

      <div>
        <Card className='cardLeftBook' variant="outlined">
          <BookForm onChange={handleOnChange} />
        </Card>

        <Card className='cardRightBook' variant="outlined">
          <BookTable booksList={booksList} />
        </Card>
      </div>
    </div>
  );
};

export default BookPage;
