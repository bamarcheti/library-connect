import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  FormControl, 
  FormControlLabel, 
  FormGroup, 
  Grid, 
  InputLabel, 
  MenuItem, 
  Select, 
  SelectChangeEvent, 
  TextField
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import bookService from '../../../services/bookService';
import authorService, { Author } from '../../../../author/services/authorService';
import { CreateBookDto } from '../../../dtos/CreateBookDto';
import './style.css';

type Props = {
  onChange: (book: CreateBookDto) => void
};

const BookForm: React.FC<Props> = ({ onChange }) => {
  const [authorsList, setAuthorsList] = useState<Author[]>([]);

  const [book, setBook] = useState({
    title: '',
    qtdPages: 0,
    authorName: '',
    digital: false,
    size: 0,
    kindleCompatible: false
  });

  useEffect(() => {
    const getAuthors = async () => {
      const response = await authorService.getAuthors();
      setAuthorsList(response);
    };
    getAuthors();
  }, []);

  const createBook = async () => {
    const book: CreateBookDto = { title: '', qtdPages: 0, authorName: '', digital: false, size: 0, kindleCompatible: false };
    const response = await bookService.create(book);
    onChange(book);
  };

  const selecthandleChange = (event: SelectChangeEvent) => {
    setBook({ ...book, authorName: event.target.value });
  };

  const checkhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, digital: event.target.checked });
  };

  const switchhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, kindleCompatible: event.target.checked });
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
                value={book.title}
                onChange={(event) => setBook({ ...book, title: event.target.value })}
              />
            </Grid>

            <Grid container item direction="row">
              <TextField
                fullWidth
                label="Qtd páginas"
                value={book.qtdPages}
                onChange={(event) => setBook({ ...book, qtdPages: Number(event.target.value) })}
              />
            </Grid>

            <Grid container item direction="row">
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>Autor</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={book.authorName}
                  label='Autor'
                  onChange={selecthandleChange}
                >
                  {authorsList.map((author, index) => (
                    <MenuItem
                      key={index}
                      value={author.name}>{author.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid container item direction="row">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={book.digital}
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
                value={book.size}
                onChange={(event) => setBook({ ...book, size: Number(event.target.value) })}
              />
            </Grid>

            <Grid container item direction="row">
              <FormControlLabel
                control={
                  <Switch
                    checked={book.kindleCompatible}
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