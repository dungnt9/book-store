// src/services/bookService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/books';

export const getAllBooks = () => {
    return axios.get(API_URL);
};

export const getBookById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};