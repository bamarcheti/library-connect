import { Author } from '../entities/author';
import { Book } from '../entities/book';
import { DigitalBook } from '../entities/digitalBook';
import { BookModel } from '../schemas/bookSchema';
import { BookRepository } from './book.repository';

export class BookImplementationRepository implements BookRepository {

  public async create(book: Book) {
    let bookCreated: Book;

    if (book instanceof DigitalBook) {
      const bdBook = await BookModel.create({
        titulo: book.title,
        qtd_paginas: book.qtdPages,
        autor: book.author.id,
        data_publicacao: book.publishDate,
        compativel_kindle: book.kindleCompatible == true,
        tamanho: book.sizeInKBytes,
        
      }).then((obj: any) => obj.populate('autor'));

      bookCreated = new DigitalBook(
        bdBook.titulo,
        bdBook.qtd_paginas,
        bdBook.autor,
        bdBook.data_publicacao,
        bdBook.tamanho,
        bdBook.compativel_kindle,
        bdBook._id
      );
    } else {
      const bdBook = await BookModel.create({
        titulo: book.title,
        qtd_paginas: book.qtdPages,
        autor: book.author.id,
        data_publicacao: book.publishDate,
      }).then((obj: any) => obj.populate('autor'));

      bookCreated = new Book(
        bdBook.titulo,
        bdBook.qtd_paginas,
        bdBook.autor,
        bdBook.data_publicacao,
        bdBook._id,
        
      );
    }

    return bookCreated;
  }

  public async findAll(): Promise<Book[]> {
    const bdBooks = await BookModel.find({}).populate("autor")
    const books: Book[] = [];

    for (const bdBook of bdBooks) {
      const author = bdBook.autor as any;
      if (bdBook.tamanho) {
        const book = new DigitalBook(
          bdBook.titulo as string,
          bdBook.qtd_paginas as number,
          new Author(author.nome, author.quantidade_livros, author._id),
          bdBook.data_publicacao as Date,
          bdBook.tamanho as number,
          bdBook.compativel_kindle as boolean,
          bdBook._id.toString()     
        )
        
        books.push(book)
      } else {
        const book = new Book(
          bdBook.titulo as string,
          bdBook.qtd_paginas as number,
          new Author(author.nome, author.quantidade_livros, author._id),
          bdBook.data_publicacao as Date,
          bdBook._id.toString()
        )
        books.push(book)
      }
    }
    return books;
  }
}