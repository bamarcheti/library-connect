import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TableColumn } from '../../../../shared/models/Table';

type Author = {
  name: string;
  qtdBooks: number;
};

const authorsList: Author[] = [
  { name: 'Luis', qtdBooks: 8 },
  { name: 'Bárbara', qtdBooks: 3 },
  { name: 'Marcelo', qtdBooks: 1 },
  { name: 'Teodoro Marques', qtdBooks: 1 },
];

const authorColumns: TableColumn[] = [
  { label: 'Nome', dataKey: 'name' },
  { label: 'Quantidade de livros', dataKey: 'qtdBooks', align: 'center' },
];

const AuthorsTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 488 }} size="small" aria-sort="none">
          <TableHead>
            <TableRow>
              {authorColumns.map((column, index) => (
                <TableCell key={index} align={column.align || 'left'}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {authorsList.map((author, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th">{author.name}</TableCell>
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
