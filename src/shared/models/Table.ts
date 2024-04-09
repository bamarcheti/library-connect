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
