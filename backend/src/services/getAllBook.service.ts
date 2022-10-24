import { Book } from "../entities/book";
import { BookRepository } from "../repository/book.repository";


export class GetAllBookService {
  constructor(
    private readonly bookRepository: BookRepository,
  ) { }

  async getAllBook(): Promise<Book[]> {

    const bookList = await this.bookRepository.findAll();

    return bookList;
  }
}