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
  title: string,
  qtdPages: number,
  authorName: string,
) {
  return { title, qtdPages, authorName };
}

const rows = [
  createData('Clean Code', 4, 'Robert C. Martin'),
  createData('Clean Coder', 5, 'Robert C. Martin'),
  createData('Padrões de Projetos', 2, 'Erich Gama'),
  createData('Driven Domain Design', 1, 'Eric Evans'),
  createData('Refatoração', 7, 'Martin Fowler'),
  createData('Lean Inception', 3, 'Paulo Caroli'),
  createData('Clean Architecture', 4, 'Robert C. Martin'),
  createData('Estrutura de dados ', 9, 'Loiane'),
];

const BookForm = () => {

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
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" >{row.title}</TableCell>
                <TableCell align="center">{row.qtdPages}</TableCell>
                <TableCell align="center">{row.authorName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default BookForm;