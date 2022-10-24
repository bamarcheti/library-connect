import supertest from 'supertest';

test('deve obter sucesso ao buscar livros', async () => {

  const response = await supertest('http://localhost:3000').get('/books');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('books listed with success');
});

test('deve falhar ao tentar buscar livros', async () => {

  const response = await supertest('http://localhost:3000').post('/books')
  expect(response.status).toBe(400);
});