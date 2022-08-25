import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Button, Card, CardActions, CardContent, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import bookService from '../../../services/bookService';
import '../BookForm/style.css';

const BookForm = () => {
  // const [authorName, setAuthorName] = useState('');
  // const [checked, setChecked] = React.useState(false);

  const [bookForm, setBook] = useState({
    title: '',
    qtdPages: 0,
    authorName: '',
    digital: false,
    size: 0,
    kindleCompatible: false
  });
  
  const createBook = async () => {
    const response = await bookService.create(bookForm);
    console.log(response);
  };

  const selecthandleChange = (event: SelectChangeEvent) => {
    setBook({ ...bookForm, authorName: event.target.value });
  };
  
  const checkhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...bookForm, digital: event.target.checked });
  };

  const switchhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...bookForm, kindleCompatible: event.target.checked });
  };

  return (
    <FormGroup className='formBook'>
      <Card className='formBook'>
        <CardContent className='formBook'>
          
          <h2>CRIAR NOVO LIVRO</h2>

          <Grid container direction="column" padding={2} spacing={2}>
            <Grid container item direction="row">
              <TextField
                fullWidth
                label="Título"
                value={bookForm.title}
                onChange={(event) => setBook({ ...bookForm, title: event.target.value })}
              />
            </Grid>

            <Grid container item direction="row">
              <TextField
                fullWidth
                label="Qtd páginas"
                value={bookForm.qtdPages}
                onChange={(event) => setBook ({ ...bookForm, qtdPages: Number(event.target.value) })}
              />
            </Grid>

            <Grid container item direction="row">
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Autor</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={bookForm.authorName}
                  label='Autor'
                  onChange={selecthandleChange}
                >
                  <MenuItem value={'Robert C. Martin'}>Robert C. Martin</MenuItem>
                  <MenuItem value={'Teste 2'}>Teste 2</MenuItem>
                  <MenuItem value={'Teste 3'}>Teste 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid container item direction="row">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bookForm.digital}
                    onChange={checkhandleChange} 
                  />
                }
                label="É digital?"
              />
            </Grid> 

            <Grid container item direction="row">
              <TextField
                fullWidth
                label="Tamanho em KBytes"
                value={bookForm.size}
                onChange={(event) => setBook ({ ...bookForm, size: Number(event.target.value) })}
              />
            </Grid>

            <Grid container item direction="row">
              <FormControlLabel
                control={
                  <Switch
                    checked={bookForm.kindleCompatible}
                    onChange={switchhandleChange}
                  />
                }
                label="Compativel Kindle" 
              />
            </Grid>
          </Grid>
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