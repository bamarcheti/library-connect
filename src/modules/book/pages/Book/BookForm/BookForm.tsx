import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CreateBookDto } from '../../../dtos/CreateBookDto';
import bookService from '../../../services/bookService';
import '../BookForm/style.css';

const BookForm = () => {
  // const [authorName, setAuthorName] = useState('');
  const [checked, setChecked] = React.useState(false);

  const [book, setBook] = useState({
    title: '',
    qtdPages: 0,
    authorName: '',
    digital: false,
    size: 0,
    kindleCompatible: false
  });
  
  const createBook = async () => {
    // const book: CreateBookDto = {
    //   authorName,
    //   title: '',
    //   qtdPages: 0,
    //   digital: false,
    //   size: 0,
    //   kindleCompatible: false
    // };
    const response = await bookService.create(book);
  };

  const selecthandleChange = (event: SelectChangeEvent) => {
    setBook({ ...book, authorName: event.target.value });
  };

  const checkhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, authorName: event.target.value });
  };

  return (
    <FormGroup className='formBook'>
      <Card className='formBook'>
        <CardContent className='formBook'>
          
          <h2>CRIAR NOVO LIVRO</h2>

          <TextField
            fullWidth
            className='input'
            label="Título"
            value={book.title}
            onChange={(event) => setBook({ ...book, title: event.target.value })}
          />

          <TextField
            fullWidth
            className='input'
            label="Qtd páginas"
            value={book.qtdPages}
            onChange={(event) => setBook ({ ...book, qtdPages: Number(event.target.value) })}
          />

          <FormControl fullWidth className='input'>
            <InputLabel id='demo-simple-select-label'>Autor</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={book.authorName}
              label='Autor'
              onChange={selecthandleChange}
            >
              <MenuItem value={'Robert C. Martin'}>Robert C. Martin</MenuItem>
              <MenuItem value={'Teste 2'}>Teste 2</MenuItem>
              <MenuItem value={'Teste 3'}>Teste 3</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel  
            control={
              <Checkbox
                // {...label}
                checked={book.digital}
                onChange={(event) => setBook({ ...book, digital: Boolean(event.target.checked ? 'Sim' : 'Nao') })} 
              />
            }
            className='input'
            label="É digital? "
          /> 

          <TextField
            fullWidth
            className='input'
            label="Tamanho em KBytes"
            value={book.size}
            onChange={(event) => setBook ({ ...book, size: Number(event.target.value) })}
          />

          <FormControlLabel
            control={
              <Switch
                checked={book.kindleCompatible}
                onChange={checkhandleChange}
              />
            }
            className='input'
            label="Compativel Kindle" 
          />
        </CardContent>

        <CardActions>
          <Button
            size='small'
            variant="contained"
            onClick={createBook}
          >
            Salvar
          </Button>
        </CardActions>
      </Card>
    </FormGroup>
  );
};

export default BookForm;