import { Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { readJsonFile, writeJsonFile } from '../../../../_shared/jsonHelpers';
import ContentForm from '../../../../shared/components/ContentForm';
import { CreateAuthorDto } from '../../dto/CreateAuthorDto';
import authorService from '../../services/authorService';
import './style.css';

type Props = {
  onChange: (author: CreateAuthorDto) => void;
};

const AuthorForm: React.FC<Props> = ({ onChange }) => {
  const [name, setName] = useState('');
  const authors = '../json/authors.json';

  const createAuthor = async () => {
    const author: CreateAuthorDto = { name };

    try {
      await authorService.create(author);
      onChange(author);
      const existingAuthors = readJsonFile(authors);
      existingAuthors.push(createAuthor);
      writeJsonFile(authors, existingAuthors);
    } catch (error) {
      console.log('Erro ao criar autor:', error);
    }
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
