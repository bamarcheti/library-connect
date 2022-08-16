import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CreateBookDto } from '../../../dtos/CreateBookDto';
import bookService from '../../../services/bookService';

const BookForm = () => {
  const [authorName, setAuthorName] = useState('');
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked, setChecked] = React.useState(false);

  const createBook = async () => {
    const book: CreateBookDto = {
      authorName,
      title: '',
      qtdPages: 0,
      digital: false,
      size: 0,
      kindleCompatible: false
    };
    const response = await bookService.create(book);
  };

  const selecthandleChange = (event: SelectChangeEvent) => {
    setAuthorName(event.target.value as string);
  };

  const checkhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
            onChange={(event) => setAuthorName(event.target.value)}
          />

          <TextField
            fullWidth
            label="Qtd páginas"
          />

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Autor</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={authorName}
              label='Autor'
              onChange={selecthandleChange}
            >
              <MenuItem value={10}>Robert C. Martin</MenuItem>
              <MenuItem value={20}>Teste 2</MenuItem>
              <MenuItem value={30}>Teste 3</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel 
            control={<Checkbox {...label} />} 
            label="É digital?"
          />

          <TextField
            fullWidth
            label="Tamanho em KBytes"
          />

          <FormControlLabel
            control={
              <Switch
                checked={checked}
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