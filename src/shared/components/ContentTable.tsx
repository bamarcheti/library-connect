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
import { Author } from '../../modules/author/services/authorService';

export interface TableColumn {
  label: string;
  dataKey: string;
  align?: 'left' | 'center' | 'right';
}

interface TableData {
  id: string;
  title: string;
  qtdPages: number;
  author: Author;
  isDigital: boolean;
  sizeInKBytes: number;
  kindleCompatible: boolean;
  publishDate: string;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn[];
}

const ContentTable = <T extends Record<string, any>>({
  data,
  columns,
}: TableProps<T>) => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 600 }} size="small" aria-sort="none">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell key={index} align={column.align || 'left'}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {columns.map((column, colIndex) => (
                  <TableCell
                    key={colIndex}
                    align={column.align || 'left'}
                    component={column.dataKey === 'title' ? 'th' : 'td'}
                  >
                    {column.dataKey === 'publishDate'
                      ? dayjs(item[column.dataKey]).format('DD/MM/YYYY')
                      : ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ContentTable;
