import './bookList.css';
import React from 'react';
import {Link} from 'react-router-dom';

const BookList = (props) => {
    const books = props.books.map( ({ description, id, volumeInfo }) => {
        return (
        <div className="book-card"  key={id}>   
            <img alt={description} src={volumeInfo.imageLinks.thumbnail} />
            <p>author: {volumeInfo.authors}</p>
            <p>title: {volumeInfo.title}</p>
            <Link to="/Details">Read More</Link>
        </div>
     )

    })
console.log(props.books)
    return (
        <div className="book-list">{books}</div>
    )
    

};

export default BookList;