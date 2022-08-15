import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookForm from './BookForm/BookForm';
import BookTable from './BookTable/BookTable';

const BookPage = () => {
  return (
    <Box padding={5}>
      <Typography 
        variant="h1"
      >
        GERENCIAR LIVROS
      </Typography>

      <Grid
        sx={{ width: '100%' }}
        style={{
          paddingTop: 20,
        }}
        container
        spacing={2}
      >
        <Grid item xs={6}>
          <BookForm />
        </Grid>

        <Grid item xs={6}>
          <BookTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookPage;
