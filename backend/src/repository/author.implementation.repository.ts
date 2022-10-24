import { Author } from '../entities/author';
import { AuthorModel } from '../schemas/authorSchema';

import { AuthorRepository } from './author.repository';

export class AuthorImplementationRepository implements AuthorRepository {

  public async create(author: Author) {
    let authorCreated: Author;

    const bdAuthor = await AuthorModel.create({
      nome: author.name,
      quantidade_livros: author.qtdBooks,
    })

    authorCreated = new Author(
      bdAuthor.nome,
      bdAuthor.quantidade_livros
    );

    return authorCreated;
  }

  public async findAuthorById(id: string): Promise<Author | null> {
    const bdAuthor: any = await AuthorModel.findOne({ _id: id })
    if (bdAuthor) {
      const authorFound = new Author(
        bdAuthor.nome,
        bdAuthor.quantidade_livros,
        bdAuthor._id.toString()
      );
      return authorFound;
    }
    return null;
  }

  public async updateQtdBooksAuthor(authorId: string, qtdBooks: number): Promise<void> {
    await AuthorModel.updateOne({ _id: authorId }, { quantidade_livros: qtdBooks });
  }

  public async findAll(): Promise<Author[]> {
    const bdAuthors = await AuthorModel.find({});
    const authors: Author[] = [];
    for (const bdAuthor of bdAuthors) {
      const author = new Author(
        bdAuthor.nome,
        bdAuthor.quantidade_livros,
        bdAuthor._id.toString()
      )
      authors.push(author)
    }
    return authors;

  }
}