import React from 'react';
import {Button} from '@mui/material'; 
import './book.css';

function Book(props) {
  const {_id,name,author,description,image,price} = props.book;

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='card-details'>
        <h2>{name}</h2>
        <article>by {author}</article>
        <p>{price}ratings</p>
        <p>{description}</p>
          <Button>Update</Button>
          <Button>Delete</Button>
      </div>
    </div>
  )
}

export default Book