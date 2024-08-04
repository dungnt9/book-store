// src/pages/BookDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/bookService';
import './BookDetailPage.css'; // Import CSS file for styling

const BookDetailPage = () => {
    const { id } = useParams(); // Get book ID from route parameters
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadBook(id);
    }, [id]);

    const loadBook = async (id) => {
        try {
            const response = await getBookById(id);
            setBook(response.data);
        } catch (error) {
            console.error('Failed to fetch book:', error);
            setError('Could not load book details.');
        }
    };

    if (error) return <div>{error}</div>;
    if (!book) return <div>Loading...</div>;

    return (
        <div className="book-detail">
            <h1>{book.title}</h1>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Published Date:</strong> {book.publishedDate}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <a href={`/books/edit/${book.id}`} className="edit-button">Edit</a>
        </div>
    );
};

export default BookDetailPage;
