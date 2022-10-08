import React,{useState,useEffect} from 'react';
import Checkbox from '@mui/material/Checkbox';
import './Book/book.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Addbook() {

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    rating:"",
    author: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        rating: Number(inputs.rating),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  
  return (
<div className="container">
            <h1>Add Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <input name='name' value={inputs.name} onChange={(e)=>handleChange(e)} type="text" required />
                    <label>Name</label>
                </div>
        
                <div className="form-control">
                    <input name='author' type="text" required value={inputs.author} onChange={handleChange}/>
                    <label>Author</label>
                </div>

                <div className="form-control">
                    <input name='description' type="text" required value={inputs.description} onChange={handleChange}/>
                    <label>Description</label>
                </div>


                <div className="form-control">
                    <input name='rating' type="number" min={1} max={5} required value={inputs.rating} onChange={handleChange}/>
                    <label>Rating</label>slider would be better?
                </div>

                <div className="form-control">
                    <input name='image' type="text" required value={inputs.image} onChange={handleChange}/>
                    <label>Image</label>
                </div>

                Finished reading : <Checkbox name='available' checked={checked} onChange={()=>setChecked(!checked)}/>  

                <button className="btn">Add</button>

            </form>
        </div>
  )
}

export default Addbook
