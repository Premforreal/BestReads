import React from 'react';
import {Button} from '@mui/material'; 
import {Link, useNavigate} from 'react-router-dom';
import './book.css';
import axios from 'axios';

function Book(props) {
  const {_id,name,author,description,image,price} = props.book;
  const history = useNavigate();

async  function deleteHandler(){
   await  axios.delete(`http://localhost:5000/books/${_id}`)
          .then((res)=>res.data)
          .then(()=>window.location.reload())
          // .then(()=>history("/books"));
  }

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <div className='card-details'>
        <h2>{name}</h2>
        <article>by {author}</article>
        <p>{price}ratings</p>
        <p>{description}</p>
          <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
          <Button onClick={deleteHandler}>Delete</Button>
      </div>
    </div>
  )
}

export default Book