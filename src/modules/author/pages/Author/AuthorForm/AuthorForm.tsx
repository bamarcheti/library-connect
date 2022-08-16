import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { CreateAuthorDto } from '../../../dtos/CreateAuthorDto';
import authorService from '../../../services/authorService';

const AuthorForm = () => {
  const [name, setName] = useState('Robert C. Martin');

  const createAuthor = async () => {
    const author: CreateAuthorDto = { name };    
    const response = await authorService.create(author);
    console.log(response);
  };

  return (
    <Card sx={{ maxWidth: 600 }} variant="outlined">
      <CardContent>
        <Typography
          gutterBottom
          variant="h2"
          marginBottom={4}
        >
          CRIAR NOVO AUTOR
        </Typography>

        <TextField
          fullWidth
          label="Nome do Autor"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </CardContent>
      <CardActions>
        <Stack>
          <Button variant="contained" size="small" onClick={createAuthor}>
            Salvar
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default AuthorForm;