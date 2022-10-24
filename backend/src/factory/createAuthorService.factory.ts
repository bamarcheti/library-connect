import { AuthorImplementationRepository } from '../repository/author.implementation.repository';
import { CreateAuthorService } from '../services/createAuthor.service';


export const makeCreateAuthorService = (): CreateAuthorService => {
  return new CreateAuthorService(new AuthorImplementationRepository());
};