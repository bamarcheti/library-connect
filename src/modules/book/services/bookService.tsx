import { CreateBookDto } from '../dtos/CreateBookDto';

class BookService {
  private books: any[];

  constructor() {
    this.books = [];
  }

  async create(createDto: CreateBookDto) {
    const qtdPagesRandom = Math.floor(Math.random() * 10);

    this.books.push({
      authorName: createDto.authorName,
      title: createDto.title,
      digital: createDto.digital,
      kindleCompatible: createDto.kindleCompatible,
      qtdPages: qtdPagesRandom,
      size: createDto.size,
    });
  }

  async getBooks() {
    return this.books;
  }
}
export default new BookService();