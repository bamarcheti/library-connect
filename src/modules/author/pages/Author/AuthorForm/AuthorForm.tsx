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
  const [name, setName] = useState('');

  const createAuthor = async () => {
    const author: CreateAuthorDto = { name };    
    const response = await authorService.create(author);
    console.log(response);
  };

  return (
    <Card className='formAuthor'>
      <CardContent>
        
        <h2>CRIAR NOVO AUTOR</h2>

        <TextField
          fullWidth
          label="Nome do Autor"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </CardContent>
      <CardActions>
        <Stack>
          <Button 
            variant="contained" 
            size="small" 
            onClick={createAuthor}
          >
            Salvar
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default AuthorForm;