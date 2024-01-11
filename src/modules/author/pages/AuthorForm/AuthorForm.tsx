import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import ContentForm from '../../../../shared/components/ContentForm';
import './style.css';

const AuthorForm = () => {
  const [name, setName] = useState('');
  const authors = '../json/authors.json';

  const createAuthor = async () => {
    if (name) {
      window.alert('Autor Criado com Sucesso!✅');
    } else {
      window.alert('Erro ao criar autor!❌');
    }

    // const author: CreateAuthorDto = { name };
    // try {
    //   await authorService.create(author);
    //   onChange(author);
    //   const existingAuthors = readJsonFile(authors);
    //   existingAuthors.push(createAuthor);
    //   writeJsonFile(authors, existingAuthors);
    // } catch (error) {
    //   console.log('Erro ao criar autor:', error);
    // }
  };

  return (
    <ContentForm title="CRIAR NOVO AUTOR" onClick={createAuthor}>
      <Grid container item direction="row">
        <TextField
          fullWidth
          type="text"
          label="Nome do Autor"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Grid>
    </ContentForm>
  );
};

export default AuthorForm;
