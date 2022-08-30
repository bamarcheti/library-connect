import { Author } from '../../author/services/authorService';
import api from '../../_shared/api';
import { CreateBookDto } from '../dtos/CreateBookDto';

export type Book =
{
  title: string; 
  qtdPages: number; 
  author: Author; 
  isDigital: boolean;
  sizeInKBytes: number; 
  kindleCompatible: boolean;
  publishDate: string;
}

class BookService {
  private books: any[];

  constructor() {
    this.books = [];
  }

  async create(createDto: CreateBookDto) {
    // this.books.push({
    //   title: createDto.title,
    //   qtdPages: createDto.qtdPages,
    //   authorName: createDto.authorName,
    //   digital: createDto.digital,
    //   size: createDto.size,
    //   kindleCompatible: createDto.kindleCompatible,
    // });
    await api.post('/books', createDto);
  }

  async getBooks() {
    const request = await api.get('/books');
    const booksCopy: Book[] = request.data.data;
    
    return booksCopy;
  }
}
export default new BookService();