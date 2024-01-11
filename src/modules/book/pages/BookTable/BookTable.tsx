import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import dayjs from 'dayjs';
import { TableColumn } from '../../../../_shared/Table';

type Book = {
  title: string;
  qtdPages: number;
  author: { name: string };
  publishDate: string;
};

const booksList: Book[] = [
  {
    title: 'Clean Code',
    qtdPages: 500,
    author: { name: 'Luis' },
    publishDate: '12/09/2021',
  },
  {
    title: 'Arquitetura Limpa',
    qtdPages: 500,
    author: { name: 'Guilherme' },
    publishDate: '01/23/2021',
  },
  {
    title: 'Harry Architecture',
    qtdPages: 4000,
    author: { name: 'Luis' },
    publishDate: '03/08/1976',
  },
  {
    title: 'Aonde caminhava o homem',
    qtdPages: 16,
    author: { name: 'Teodoro Marques' },
    publishDate: '05/11/2020',
  },
];

const bookColumns: TableColumn[] = [
  { label: 'Título', dataKey: 'title' },
  { label: 'Qtd páginas', dataKey: 'qtdPages', align: 'center' },
  { label: 'Autor', dataKey: 'author.name', align: 'center' },
  { label: 'Data da Publicação', dataKey: 'publishDate', align: 'center' },
];

const BookTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 600 }} size="small" aria-sort="none">
          <TableHead>
            <TableRow>
              {bookColumns.map((column, index) => (
                <TableCell key={index} align={column.align || 'left'}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {booksList.map((book, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th">{book.title}</TableCell>
                <TableCell align="center">{book.qtdPages}</TableCell>
                <TableCell align="center">{book.author.name}</TableCell>
                <TableCell align="center">
                  {dayjs(book.publishDate).format('DD/MM/YYYY')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default BookTable;
