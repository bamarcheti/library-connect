import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useEffect, useState } from 'react';
import { readJsonFile, writeJsonFile } from '../../../../_shared/jsonHelpers';
import ContentForm from '../../../../shared/components/ContentForm';
import authorService, { Author } from '../../../author/services/authorService';
import { CreateBookDto } from '../../dto/CreateBookDto';
import bookService from '../../services/bookService';
import './style.css';

type Props = {
  onChange: (createBook: CreateBookDto) => void;
};

const BookForm: React.FC<Props> = ({ onChange }) => {
  const [authorsList, setAuthorsList] = useState<Author[]>([]);
  const [title, setTitle] = useState('');
  const [cleared, setCleared] = React.useState<boolean>(false);
  const books = '../json/books.json';

  const [book, setBook] = useState({
    title: '',
    qtdPages: 0,
    authorId: '',
    isDigital: false,
    sizeInKBytes: 0,
    kindleCompatible: false,
    publishDate: '',
  });

  useEffect(() => {
    const getAuthors = async () => {
      const response = await authorService.getAuthors();
      setAuthorsList(response);
    };
    getAuthors();
  }, []);

  const createBook = async () => {
    if (!title.trim() || !book.qtdPages || !book.authorId) {
      return;
    }

    const createBook: CreateBookDto = {
      title: title,
      qtdPages: book.qtdPages,
      authorId: book.authorId,
      isDigital: book.isDigital,
      sizeInKBytes: book.sizeInKBytes,
      kindleCompatible: book.kindleCompatible,
      publishDate: book.publishDate,
    };

    try {
      await bookService.create(createBook);
      onChange(createBook);
      const existingBooks = readJsonFile(books);
      existingBooks.push(createBook);
      writeJsonFile(books, existingBooks);
    } catch (error) {
      console.log('Erro ao criar livro:', error);
    }
  };

  const selecthandleChange = (event: SelectChangeEvent) => {
    setBook({ ...book, authorId: event.target.value });
  };

  const setPublishDate = (value: string | null) => {
    if (value) {
      setBook({ ...book, publishDate: value });
    }
  };

  const checkhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, isDigital: event.target.checked });
  };

  const switchhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, kindleCompatible: event.target.checked });
  };

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <ContentForm title="CRIAR NOVO LIVRO" onClick={createBook}>
      <Grid container item direction="row">
        <TextField
          fullWidth
          label="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Grid>

      <Grid container item direction="row">
        <TextField
          fullWidth
          label="Qtd páginas"
          value={book.qtdPages}
          onChange={(event) =>
            setBook({ ...book, qtdPages: Number(event.target.value) })
          }
        />
      </Grid>

      <Grid container item direction="row">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Autor</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={book.authorId}
            label="Autor"
            onChange={selecthandleChange}
          >
            {authorsList.map((author, index) => (
              <MenuItem key={index} value={author.id}>
                {author.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid container item direction="row">
        <FormControlLabel
          control={
            <Checkbox checked={book.isDigital} onChange={checkhandleChange} />
          }
          label="É digital?"
        />
      </Grid>

      <Grid container item direction="row">
        <TextField
          fullWidth
          label="Tamanho em KBytes"
          value={book.sizeInKBytes}
          onChange={(event) =>
            setBook({ ...book, sizeInKBytes: Number(event.target.value) })
          }
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

      <Grid container item direction="row">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data da publicação"
            slotProps={{
              textField: {
                helperText: 'MM/DD/YYYY',
              },
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
            value={book.publishDate}
            onChange={(newValue) => setPublishDate(newValue)}
          />
        </LocalizationProvider>
      </Grid>
    </ContentForm>
  );
};

export default BookForm;
