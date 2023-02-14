import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import Subtitle from '../../../../../shared/components/Subtitle/Subtitle';
import { CreateAuthorDto } from '../../../dtos/CreateAuthorDto';
import authorService from '../../../services/authorService';
import './style.css';

type Props = {
  onChange: (author: CreateAuthorDto) => void
};

const AuthorForm: React.FC<Props> = ({ onChange }) => {
  const [name, setName] = useState('');

  const createAuthor = async () => {
    const author: CreateAuthorDto = { name };    
    await authorService.create(author);
    onChange(author);
  };

  return (
    <Card className='formAuthor'>
      <CardContent>
        
        <Subtitle title='CRIAR NOVO AUTOR' />

        <Grid container direction="column" padding={2} spacing={1}>
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
        <div className='container-button'>
          <Button 
            variant="text" 
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