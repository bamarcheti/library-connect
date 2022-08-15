import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

function createData(
  name: string,
  qtdBooks: number,
) {
  return { name, qtdBooks };
}

const rows = [
  createData('Robert C. Martin', 4),
  createData('Autor', 5),
  createData('Autor 2', 2),
  createData('Martin Fowler', 1),
  createData('Michael Feathers', 7),
  createData('Kent Beck', 3),
  createData('Erich Gama', 4),
  createData('Loiane', 9),
];

const AuthorsTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 488 }} size="small" aria-sort="none">
          <TableHead>
            <TableRow>
              <TableCell >Nome</TableCell>
              <TableCell align="center">Quantidade de livros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" >{row.name}</TableCell>
                <TableCell align="center">{row.qtdBooks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};


export default AuthorsTable;
