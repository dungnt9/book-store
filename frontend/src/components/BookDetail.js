// src/components/BookDetail.js
import React, { useEffect, useState } from 'react';
import { getBookById } from '../services/bookService';

const BookDetail = ({ match }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        loadBook(match.params.id);
    }, [match.params.id]);

    const loadBook = async (id) => {
        const response = await getBookById(id);
        setBook(response.data);
    };

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
        </div>
    );
};

export default BookDetail;
