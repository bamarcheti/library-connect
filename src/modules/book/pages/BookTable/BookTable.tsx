import ContentTable, {
  TableColumn,
} from '../../../../shared/components/ContentTable';

type Book = {
  title: string;
  qtdPages: number;
  author: { name: string };
  publishDate: string;
};

const bookColumns: TableColumn[] = [
  { label: 'Título', dataKey: 'title' },
  { label: 'Qtd páginas', dataKey: 'qtdPages', align: 'center' },
  { label: 'Autor', dataKey: 'author.name', align: 'center' },
  { label: 'Data da Publicação', dataKey: 'publishDate', align: 'center' },
];

const BookTable: React.FC<{ booksList: Book[] }> = ({ booksList }) => {
  return <ContentTable data={booksList} columns={bookColumns} />;
};

export default BookTable;
