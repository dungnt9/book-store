// src/pages/HomePage.js
import React from 'react';
import BookList from '../components/BookList';

const HomePage = () => {
    return (
        <div>
            <h1>Cửa hàng bán sách</h1>
            <h1>Trang chủ</h1>
            <BookList />
        </div>
    );
};

export default HomePage;
