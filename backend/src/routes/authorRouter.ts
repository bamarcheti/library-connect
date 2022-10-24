import { Router } from "express";
import { Author } from "../entities/author";
import { makeCreateAuthorService } from "../factory/createAuthorService.factory";
import { makeGetAllAuthorService } from '../factory/getAllAuthorService.factory';

const routesAuthor = Router();

routesAuthor.get('/authors', async function (req, res) {
    try {
        const getAllAuthorService = makeGetAllAuthorService();
        const listAuthor = await getAllAuthorService.getAllAuthor();
        return res.status(200).send({
            message: 'authors listed with success',
            data: listAuthor,
        });
    } catch (error: any) {
        return res.status(400).send({
            message: error.message,
            data: null,
        });
    }
});

routesAuthor.post('/authors', async (req, res) => {
    try {
        const { name } = req.body;

        const createAuthorService = makeCreateAuthorService();

        let author: Author;
        author = new Author(
            name,
        );

        const createdAuthor = await createAuthorService.createAuthor(author);

        return res.status(200).send({
            message: 'author created',
            data: createdAuthor,
        });
    } catch (error: any) {
        return res.status(400).send({
            message: error.message,
            data: null,
        });
    }
});

export { routesAuthor };