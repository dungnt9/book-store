// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../services/bookService';
import './BookList.css'; // Import CSS file for styling

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const response = await getAllBooks();
            setBooks(response.data);
        } catch (error) {
            console.error('Failed to fetch books:', error);
            setError('Could not load books.');
        }
    };

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Danh sách sách</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td>
                                <a href={`/books/${book.id}`}>Details</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const deleteBook = async (id) => {
    await deleteBook(id);
    window.location.reload();
};

export default BookList;
