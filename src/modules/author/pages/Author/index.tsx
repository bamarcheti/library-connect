import { Card, Typography } from '@mui/material';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorsTable from './AuthorsTable/AuthorsTable';
import './style.css';

const AuthorPage = () => {
  return (
    <div className='boxAuthor'>
      <Typography variant='h1' padding={4}>GERENCIAR AUTORES</Typography>

      <div>
        <Card className='cardLeftAuthor' variant="outlined">
          <AuthorForm />
        </Card>

        <Card className='cardRightAuthor' variant="outlined">
          <AuthorsTable />
        </Card>
      </div>
    </div>
  );
};

export default AuthorPage;
