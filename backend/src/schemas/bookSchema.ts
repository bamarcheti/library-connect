import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    titulo: 'String',
    qtd_paginas: 'Number',
    autor: { type: mongoose.Types.ObjectId, ref: 'Author' },
    data_publicacao: 'Date',
    tamanho: 'Number',
    compativel_kindle: 'Boolean',
});

export const BookModel = mongoose.model('Book', bookSchema);