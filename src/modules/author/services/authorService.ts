import api from '../../../shared/server/api';
import { CreateAuthorDto } from '../dto/CreateAuthorDto';

export type Author = { name: string; qtdBooks: number; id?: string };

class AuthorService {
  async create(createDto: CreateAuthorDto) {
    await api.post('/authors', createDto);
  }

  async getAuthors() {
    const request = await api.get('/authors');
    return request.data.data;
  }
}
export default new AuthorService();
