import api from '../../../shared/server/api';
import { Author } from '../../author/services/authorService';
import { CreateBookDto } from '../dto/CreateBookDto';

export type Book = {
  title: string;
  qtdPages: number;
  author: Author;
  isDigital: boolean;
  sizeInKBytes: number;
  kindleCompatible: boolean;
  publishDate: string;
};

class BookService {
  async create(createDto: CreateBookDto) {
    await api.post('/books', createDto);
  }

  async getBooks() {
    const request = await api.get('/books');
    return request.data.data;
  }
}
export default new BookService();
