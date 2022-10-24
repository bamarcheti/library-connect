import supertest from 'supertest';

test('deve obter sucesso ao buscar autores', async () => {

  const response = await supertest('http://localhost:3000').get('/authors');

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('authors listed with success');
});

test('deve falhar ao tentar buscar autores', async () => {

  const response = await supertest('http://localhost:3000').post('/authors')
  expect(response.status).toBe(400);
});