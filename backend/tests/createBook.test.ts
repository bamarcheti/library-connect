import supertest from 'supertest';

test('deve obter sucesso ao cadastrar um livro fisico', async () => {
  const inputData = {
    title: 'Clean Architecture',
    qtdPages: 421,
    authorId: '630dfef76b6e91ee3c298537',
    publishDate: '2008-08-01',
  };

  const response = await supertest('http://localhost:3000').post('/books').send(inputData);

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('book created successfuly');
});

test('deve falhar ao tentar cadastrar um livro sem autor valido', async () => {
  const inputData = {
    title: 'Clean Code',
    qtdPages: 421,
    publishDate: '2008-08-01',
  };

  const response = await supertest('http://localhost:3000').post('/books').send(inputData);

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('o autor informado não existe');
});

test('deve falhar ao tentar cadastrar um livro com uma data de publicação no futuro', async () => {
  const inputData = {
    title: 'Clean Code',
    qtdPages: 421,
    authorId: '630e00126b6e91ee3c298545',
    publishDate: new Date('2022-09-01')
  };

  const response = await supertest('http://localhost:3000').post('/books').send(inputData);

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('a data de publicação não pode ser no futuro');
});


test('deve obter sucesso ao cadastrar um livro digital', async () => {

  const inputData = {
    title: 'Clean Code',
    qtdPages: 421,
    authorId: '630e00126b6e91ee3c298545',
    publishDate: '2008-08-01',
    isDigital: true,
    sizeInKBytes: 100,
    kindleCompatible: true,
  };

  const response = await supertest('http://localhost:3000').post('/books').send(inputData);

  expect(response.status).toBe(200);
  expect(response.body.data).toHaveProperty('id');  
  expect(response.body.data.sizeInKBytes).toBe(100);
});


test('deve falhar ao tentar cadastrar um livro digital sem informar sizeInKBytes', async () => {

  const inputData = {
    title: 'Clean Code',
    qtdPages: 421,
    authorId: '630e00126b6e91ee3c298545',
    publishDate: '2008-08-01',
    isDigital: true,
    kindleCompatible: true,
  };

  const response = await supertest('http://localhost:3000').post('/books').send(inputData);

  expect(response.status).toBe(400);
  expect(response.body.data).toBeNull();
});