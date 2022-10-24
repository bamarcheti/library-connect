import { AuthorImplementationRepository } from '../repository/author.implementation.repository';
import { BookImplementationRepository } from '../repository/book.implementation.repository';
import { CreateBookService } from '../services/createBook.service';

export const makeCreateBookService = (): CreateBookService => {
  return new CreateBookService(new BookImplementationRepository(), new AuthorImplementationRepository());
};