import React from 'react';
import {Button} from '@mui/material'; 
import {Link, useNavigate} from 'react-router-dom';
import './book.css';
import axios from 'axios';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function Book(props) {
  const {_id,name,author,description,image,rating,available} = props.book;
  const history = useNavigate();

async  function deleteHandler(){
   await  axios.delete(`http://localhost:5000/books/${_id}`)
          .then((res)=>res.data)
          //.then(()=>window.location.reload())
           .then(()=>history("/books"));
  }


  function reviewStars(num) {
    let stars = [];
    for(let i= 0; i < 5; i++) {
        if(i<num){
      stars.push(< StarIcon key={i}/>);
    }else{
        stars.push(< StarOutlineIcon key={i}/>);
    }
}
    return (
      <div className='stars'>{stars}</div>
    );
  }

  return (
    <div className='card'>
      <img src={image} alt={name} />
      
      <div className='card-details'>
          <h2>{name}</h2>
          <p id='author'>by {author}</p>
          {reviewStars(rating)}
          {/* <p>{description}</p> */}
          {/* <p>{available ? 'finished' : 'to read'}</p> */}
          <Button LinkComponent={Link} to={`/books/${_id}`}>View</Button>
          {/* <Button LinkComponent={Link} to={`/books/${_id}/update`}>Update</Button>
          <Button onClick={deleteHandler}>Delete</Button> */}
      </div>
    </div>
  )
}

export default Book