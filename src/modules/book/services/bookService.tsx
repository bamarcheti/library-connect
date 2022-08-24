import { CreateBookDto } from '../dtos/CreateBookDto';

class BookService {
  private books: any[];

  constructor() {
    this.books = [];
  }

  async create(createDto: CreateBookDto) {

    this.books.push({
      title: createDto.title,
      qtdPages: createDto.qtdPages,
      authorName: createDto.authorName,
      digital: createDto.digital,
      size: createDto.size,
      kindleCompatible: createDto.kindleCompatible,
    });
  }

  async getBooks() {
    return this.books;
  }
}
export default new BookService();