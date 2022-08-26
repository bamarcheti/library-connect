import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { Author } from '../../../services/authorService';

type Props = {
  authorsList: Author[];
  authorTitle: string;
};

const AuthorsTable: React.FC<Props> = ({ authorsList, authorTitle }) => {

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 488 }} size="small" aria-sort="none">
          <TableHead>
            <TableRow>
              <TableCell>{authorTitle}</TableCell>
              <TableCell align="center">Quantidade de livros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authorsList.map((author,index) => (
              <TableRow
                key={index}
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
