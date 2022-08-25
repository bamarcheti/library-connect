import { useState, useEffect } from 'react';
import { 
  Card, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} from '@mui/material';
import bookService, { Book } from '../../../services/bookService';

const BookTable = () => {
  const [bookList, setBookList] = useState<Book[]>([]);

  useEffect(() => {
    const getBooks =async () => {
      const response = await bookService.getBooks();
      setBookList(response);
    };
    getBooks();
  }, []);

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 488 }} size="small" aria-sort="none">
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell align="center">Qtd páginas</TableCell>
              <TableCell align="center">Autor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookList.map((book) => (
              <TableRow
                key={book.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" >{book.title}</TableCell>
                <TableCell align="center">{book.qtdPages}</TableCell>
                <TableCell align="center">{book.authorName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default BookTable;