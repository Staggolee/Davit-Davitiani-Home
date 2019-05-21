import React from 'react';

const BookList = (props) => {
    const images = props.books.map( (book) => {
        return (
        <div>
        <p>author: {book.volumeInfo.authors}</p>
        <p>title: {book.volumeInfo.title}</p>   
         <img src={book.volumeInfo.imageLinks.thumbnail} />
        </div>
     )

    })
console.log(props.books)
    return (
        <div>{images}</div>
    )
    

};

export default BookList;