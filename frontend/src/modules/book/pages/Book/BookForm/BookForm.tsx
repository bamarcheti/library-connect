import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useTheme
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useEffect, useState } from 'react';
import Subtitle from '../../../../../shared/components/Subtitle/Subtitle';
import authorService, { Author } from '../../../../author/services/authorService';
import { CreateBookDto } from '../../../dtos/CreateBookDto';
import bookService from '../../../services/bookService';
import './style.css';

type Props = {
  onChange: (createBook: CreateBookDto) => void
};

const BookForm: React.FC<Props> = ({ onChange }) => {
  const [authorsList, setAuthorsList] = useState<Author[]>([]);
  const theme = useTheme();
  const [title, setTitle] = useState('');

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
    const createBook: CreateBookDto = {
      title: title,
      qtdPages: book.qtdPages,
      authorId: book.authorId,
      isDigital: book.isDigital,
      sizeInKBytes: book.sizeInKBytes,
      kindleCompatible: book.kindleCompatible,
      publishDate: book.publishDate,
    };
    await bookService.create(createBook);
    onChange(createBook);
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

  return (
    <Card className='formBook'>
      <CardContent className='formBook'>

        <Subtitle title='CRIAR NOVO LIVRO' />

        <Grid container direction="column" padding={2} spacing={2}>
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
              onChange={(event) => setBook({ ...book, qtdPages: Number(event.target.value) })}
            />
          </Grid>

          <Grid container item direction="row">
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Autor</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={book.authorId}
                label='Autor'
                onChange={selecthandleChange}
              >
                {authorsList.map((author, index) => (
                  <MenuItem
                    key={index}
                    value={author.id}>{author.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid container item direction="row">
            <FormControlLabel
              control={
                <Checkbox
                  checked={book.isDigital}
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
              value={book.sizeInKBytes}
              onChange={(event) => setBook({ ...book, sizeInKBytes: Number(event.target.value) })}
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
            <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth >
              <DatePicker
                label="Data da publicação"
                inputFormat="DD/MM/YYYY"
                value={book.publishDate}
                onChange={(newValue?) => setPublishDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <div className='container-button'>
          <Button
            size='small'
            variant="text"
            onClick={createBook}
          >
          Salvar
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default BookForm;