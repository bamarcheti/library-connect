import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    nome: { type: 'String', required: true },
    quantidade_livros: { type: 'Number', required: true },
});

export const AuthorModel = mongoose.model('Author', authorSchema);