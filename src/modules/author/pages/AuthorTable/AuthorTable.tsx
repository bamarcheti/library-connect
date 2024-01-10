import ContentTable, {
  TableColumn,
} from '../../../../shared/components/ContentTable';

type Author = {
  name: string;
  qtdBooks: number;
};

const authorColumns: TableColumn[] = [
  { label: 'Nome', dataKey: 'name' },
  { label: 'Quantidade de livros', dataKey: 'qtdBooks', align: 'center' },
];

const AuthorsTable: React.FC<{ authorsList: Author[] }> = ({ authorsList }) => {
  return <ContentTable data={authorsList} columns={authorColumns} />;
};

export default AuthorsTable;
