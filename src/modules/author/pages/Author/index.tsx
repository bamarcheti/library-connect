import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorsTable from './AuthorsTable/AuthorsTable';

const AuthorPage = () => {
  return (
    <Box padding={5}>
      <Typography variant="h1">GERENCIAR AUTORES</Typography>

      <Grid
        sx={{ width: '100%' }}
        style={{
          paddingTop: 20,
        }}
        container
        spacing={2}
      >
        <Grid item xs={6}>
          <AuthorForm />
        </Grid>

        <Grid item xs={6}>
          <AuthorsTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthorPage;
