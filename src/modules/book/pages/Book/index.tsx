import { FormGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookForm from './BookForm/BookForm';
import BookTable from './BookTable/BookTable';

const BookPage = () => {
  return (
    <FormGroup>
      <Box
        padding={5}
        margin={1}
        display="flex" 
        flexDirection="column"
      >
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
          container item
          direction="row"
          justifyContent="flex-end"
          alignItems="baseline"
          spacing={2}
        >
          <Grid item xs={6} md={6}>
            <BookForm />
          </Grid>

          <Grid item xs={6} md={6}>
            <BookTable />
          </Grid>
        </Grid>
      </Box>
    </FormGroup>
  );
};

export default BookPage;
