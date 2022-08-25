import { CreateBookDto } from '../dtos/CreateBookDto';

export type Book =
{
  title: string; 
  qtdPages: number; 
  authorName: string; 
  digital: boolean;
  size: number; 
  kindleCompatible: boolean;
}

class BookService {
  private books: any[];

  constructor() {
    this.books = [];
  }

  async create(createDto: CreateBookDto) {
    console.log(createDto);
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