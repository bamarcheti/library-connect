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

type Props = {
  booksList: any[];
};

const BookTable: React.FC<Props> = ({ booksList }) => {
  
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
            {booksList.map((book,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" >{book.title}</TableCell>
                <TableCell align="center">{book.qtdPages}</TableCell>
                <TableCell align="center">{book.author.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default BookTable;