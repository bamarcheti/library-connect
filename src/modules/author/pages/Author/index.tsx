import { FormGroup, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorsTable from './AuthorsTable/AuthorsTable';

const AuthorPage = () => {
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
          GERENCIAR AUTORES
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
            <AuthorForm />
          </Grid>

          <Grid item xs={6} md={6}>
            <AuthorsTable />
          </Grid>
        </Grid>
      </Box>
    </FormGroup>
  );
};

export default AuthorPage;
