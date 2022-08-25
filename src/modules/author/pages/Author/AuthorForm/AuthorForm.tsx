import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { CreateAuthorDto } from '../../../dtos/CreateAuthorDto';
import authorService from '../../../services/authorService';
import './style.css';

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

        <Grid container direction="column" padding={2} spacing={2}>
          <Grid container item direction="row">
            <TextField
              fullWidth
              label="Nome do Autor"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <div className='container-button' >
          <Button 
            variant="contained" 
            size="small" 
            onClick={createAuthor}
          >
            Salvar
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default AuthorForm;