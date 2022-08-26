import { Card } from '@mui/material';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorsTable from './AuthorsTable/AuthorsTable';
import { useEffect, useState } from 'react';
import authorService, { Author } from '../../services/authorService';
import { CreateAuthorDto } from '../../dtos/CreateAuthorDto';
import MainTitle from '../../../../shared/components/MainTitle/MainTitle';
import './style.css';

const AuthorPage = () => {
  const [authorsList, setAuthorsList] = useState<Author[]>([]);


  useEffect(() => {
    const getAuthors = async () => {
      const response = await authorService.getAuthors();
      setAuthorsList(response);
    };
    getAuthors();
  }, []);

  const handleOnChange = async (author: CreateAuthorDto) => {
    const response = await authorService.getAuthors();
    setAuthorsList(response);
  };

  return (
    <div className='boxAuthor'>
      <MainTitle title='GERENCIAR AUTORES' />

      <div>
        <Card className='cardLeftAuthor' variant="outlined">
          <AuthorForm onChange={handleOnChange}/>
        </Card>

        <Card className='cardRightAuthor' variant="outlined">
          <AuthorsTable authorsList={authorsList} authorTitle='Nome' />
        </Card>
      </div>
    </div>
  );
};

export default AuthorPage;
