import React from 'react';

const Details = (props) =>{
    console.log(props)
    return (
        <div className="book-card"  key={props.id}>   
           <img alt={props.description} src={props.volumeInfo.imageLinks.thumbnail} />
           <p>author: {props.volumeInfo.authors}</p>
           <p>title: {props.volumeInfo.title}</p>
           <a href="#Details">Read More</a>
   
       </div>
   
       
       
       )
   
} 


export default Details