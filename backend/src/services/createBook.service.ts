import { CreateBookDto } from '../dtos/createBookDto';
import { Book } from '../entities/book';
import { DigitalBook } from '../entities/digitalBook';
import { AuthorRepository } from '../repository/author.repository';
import { BookRepository } from '../repository/book.repository';

export class CreateBookService {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly authorRepository: AuthorRepository,
  ) { }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const { title, qtdPages, authorId, publishDate, isDigital, sizeInKBytes, kindleCompatible } =
      createBookDto;

    const authorFound = await this.authorRepository.findAuthorById(authorId);
    if (!authorFound) {
      throw new Error('o autor informado não existe');
    }
    let book: Book;
    if (isDigital) {
      book = new DigitalBook(
        title,
        qtdPages,
        authorFound,
        new Date(publishDate),
        sizeInKBytes,
        kindleCompatible,
      );
    } else {
      book = new Book(title, qtdPages, authorFound, new Date(publishDate));
    }
    book.validate();

    authorFound.qtdBooks++;
    await this.authorRepository.updateQtdBooksAuthor(book.author.id!, authorFound.qtdBooks);

    const bookCreated = await this.bookRepository.create(book);

    return bookCreated;
  }
}