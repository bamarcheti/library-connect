import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorsTable from './AuthorsTable/AuthorsTable';
import './style.css';

const AuthorPage = () => {
  return (
    <div className='body'>
      <Typography variant="h1">
        GERENCIAR AUTORES
      </Typography>

      <div className='body-cards'>
        <Grid>
          <AuthorForm />
        </Grid>

        <Grid>
          <AuthorsTable />
        </Grid>
      </div>
    </div>
  );
};

export default AuthorPage;
