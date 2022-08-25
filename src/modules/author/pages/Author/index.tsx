import { Card } from '@mui/material';
// import MainTitle from '../../../../shared/components/MainTitle/MainTitle';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorsTable from './AuthorsTable/AuthorsTable';
import { useEffect, useState } from 'react';
import authorService, { Author } from '../../services/authorService';
import './style.css';


const AuthorPage = () => {
  // const [authorsList, setAuthorsList] = useState<Author[]>([]);

  // useEffect(() => {
  //   const getAuthors = async () => {
  //     const response = await authorService.getAuthors();
  //     setAuthorsList(response);
  //   };
  //   getAuthors();
  // }, []);

  return (
    <div className='boxAuthor'>
      {/* <MainTitle title="Autores" onChange={} /> */}

      <div>
        <Card className='cardLeftAuthor' variant="outlined">
          <AuthorForm />
        </Card>

        <Card className='cardRightAuthor' variant="outlined">
          <AuthorsTable  />
        </Card>
      </div>
    </div>
  );
};

export default AuthorPage;
