import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CreateBookDto } from '../../../dtos/CreateBookDto';
import bookService from '../../../services/bookService';

const BookForm = () => {
  // const [authorName, setAuthorName] = useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
    <FormGroup>
      <Card sx={{ maxWidth: 600, direction: 'column' }} variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            variant='h2'
            marginBottom={4}
          >
            CRIAR NOVO LIVRO
          </Typography>

          <TextField
            fullWidth
            label="Título"
            value={book.title}
            onChange={(event) => setBook({ ...book, title: event.target.value })}
          />

          <TextField
            fullWidth
            label="Qtd páginas"
            value={book.qtdPages}
            onChange={(event) => setBook ({ ...book, qtdPages: Number(event.target.value) })}
          />

          <FormControl fullWidth>
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

          {/* <FormControlLabel 
            control={
              <Checkbox 
                {
                  ...label 
                  checked={book.digital}
                  onChange={(event) => setBook ({ ...book, digital: event.target.checked})}
                } 
              />
            } 
            label="É digital?"
          /> */}

          <TextField
            fullWidth
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
            label="Compativel Kindle" 
          />
        </CardContent>

        <CardActions>
          <Stack>
            <Button 
              style={{ alignItems: 'flex-end' }}
              variant="contained" 
              size="small" 
              onClick={createBook}
            >
              Salvar
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </FormGroup>
  );
};

export default BookForm;