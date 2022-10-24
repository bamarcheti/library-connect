import { Author } from '../entities/author';
import { AuthorRepository } from '../repository/author.repository';

export class GetAllAuthorService {
  constructor(
    private readonly authorRepository: AuthorRepository,
  ) { }

  async getAllAuthor(): Promise<Author[]> {

    const authorList = await this.authorRepository.findAll();

    return authorList;
  }
}