import { Card } from '@mui/material';
import MainTitle from '../../../shared/components/MainTitle';
import AuthorForm from './AuthorForm/AuthorForm';
import AuthorsTable from './AuthorTable/AuthorTable';
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

  // const handleOnChange = async () => {
  //   const response = await authorService.getAuthors();
  //   setAuthorsList(response);
  // };

  return (
    <div className="boxAuthor">
      <MainTitle title="GERENCIAR AUTORES" />

      <div>
        <Card className="cardLeftAuthor" variant="outlined">
          <AuthorForm />
        </Card>

        <Card className="cardRightAuthor" variant="outlined">
          <AuthorsTable />
        </Card>
      </div>
    </div>
  );
};

export default AuthorPage;
