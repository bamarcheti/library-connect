import { CreateAuthorDto } from '../dtos/CreateAuthorDto';

class AuthorService {
  private authors: any[];

  constructor() {
    this.authors = [];
  }

  async create(createDto: CreateAuthorDto) {
    // const response = axios.post('http://localhost:3001/authors', createDto);

    // const response = await fetch('http://localhost:3001/authors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(createDto),
    // }).then((res) => res.json());

    // return response;

    const qtdBooksRandom = Math.floor(Math.random() * 10);
    
    this.authors.push({
      name: createDto.name,
      qtdBooks: qtdBooksRandom,
    });
  }
}

export default new AuthorService();
