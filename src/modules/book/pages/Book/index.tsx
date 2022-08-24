import { Card, Typography } from '@mui/material';
import BookForm from './BookForm/BookForm';
import BookTable from './BookTable/BookTable';
import './style.css';

const BookPage = () => {
  return (
    <div className='boxBook'>
      <Typography variant='h1' padding={4}>GERENCIAR LIVROS</Typography>

      <div>
        <Card className='cardLeftBook' variant="outlined">
          <BookForm />
        </Card>

        <Card className='cardRightBook' variant="outlined">
          <BookTable />
        </Card>
      </div>
    </div>
  );
};

export default BookPage;
