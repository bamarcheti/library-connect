import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React from 'react';

const BookForm = () => {
  const [authorName, setAuthorName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAuthorName(event.target.value as string);
  };

  return (
    <Card sx={{ minWidth: 488 }} variant="outlined">
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
            onChange={handleChange}
          >
            <MenuItem value={10}>Robert C. Martin</MenuItem>
            <MenuItem value={20}>Teste 2</MenuItem>
            <MenuItem value={30}>Teste 3</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Tamanho em KBytes"
          
        />
      </CardContent>
    </Card>
  );
};

export default BookForm;