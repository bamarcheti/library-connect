
import { CreateAuthorDto } from '../dtos/CreateAuthorDto';
import api from '../../_shared/api';

export type Author = {name: string; qtdBooks: number; id?: string}

class AuthorService {
  private authors: any[];

  constructor() {
    this.authors = [];
  }

  async create(createDto: CreateAuthorDto) {
    const qtdBooksRandom = Math.floor(Math.random() * 10);
    
    // this.authors.push({
    //   name: createDto.name,
    //   qtdBooks: qtdBooksRandom,
    // });
    await api.post('/authors', createDto);
  }
  
  async getAuthors(){
    const request = await api.get('/authors');
    const authorsCopy: Author[] = request.data.data;
    
    return authorsCopy;
  }
}
export default new AuthorService();