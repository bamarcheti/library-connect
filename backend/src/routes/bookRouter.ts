import { Router } from "express";
import { Book } from "../entities/book";
import { DigitalBook } from "../entities/digitalBook";
import { makeCreateBookService } from "../factory/createBookService.factory";
import { makeGetAllBookService } from "../factory/getAllBookService.factory";


const routesBook = Router();

routesBook.get('/books', async (req, res) => {
    try {
        const getAllBookService = makeGetAllBookService();

        const listBooks = await getAllBookService.getAllBook();

        res.status(200).send({
            message: 'books listed with success',
            data: listBooks,
        });
    } catch (error: any) {
        return res.status(400).send({
            message: error.message,
            data: null,
        });
    }
});

routesBook.post('/books', async (req, res) => {
    try {

        const createBookService = makeCreateBookService();
        const createdBook = await createBookService.createBook(req.body);
        return res.status(200).send({
            message: 'book created successfuly',
            data: createdBook,
        });
    } catch (error: any) {
        return res.status(400).send({
            message: error.message,
            data: null,
        });
    }
});

export { routesBook };