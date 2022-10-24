import { Author } from '../entities/author';

export interface AuthorRepository {
  create(author: Author): Promise<Author>;
  findAuthorById(id: string): Promise<Author | null>;
  updateQtdBooksAuthor(authorId: string, qtdBooks: number): Promise<void>;
  findAll(): Promise<Author[]>;
}