import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useEffect, useState } from 'react';
import authorService, { Author } from '../../../services/authorService';

const AuthorsTable = () => {
  const [authorsList, setAuthorsList] = useState<Author[]>([]);

  useEffect(() => {
    const getAuthors = async() => {
      const response = await authorService.getAuthors();
      setAuthorsList(response);
    };
    getAuthors();
  }, []);

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 488 }} size="small" aria-sort="none">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Quantidade de livros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authorsList.map((author) => (
              <TableRow
                key={author.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" >{author.name}</TableCell>
                <TableCell align="center">{author.qtdBooks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};


export default AuthorsTable;
