import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Book from './Book';

const URL = "http://localhost:5000/books";
const fetchHandler = async()=>{
return await axios.get(URL).then((res)=>res.data)
}

function Books() {
  const [books, setBooks] = useState();
  
  useEffect(() => {
      fetchHandler().then(data=>setBooks(data.books));
  },[]);
  
  
  return (
    <div className='Books'>
        {books && books.map((book,i)=>(
              <Book key={i} book={book}/>
        ))}
    </div>
  )
}

export default Books;