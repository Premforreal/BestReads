import {Checkbox} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div class="container"><h1>Update Book</h1>
      <form onSubmit={handleSubmit}>
                <div class="form-control">
                    <input name='name' value={inputs.name} onChange={(e)=>handleChange(e)} type="text" required />
                    <label>Name</label>
                </div>
        
                <div class="form-control">
                    <input name='author' type="text" required value={inputs.author} onChange={handleChange}/>
                    <label>Author</label>
                </div>

                <div class="form-control">
                    <input name='description' type="text" required value={inputs.description} onChange={handleChange}/>
                    <label>Description</label>
                </div>

                <div class="form-control">
                    <input name='price' type="number" required value={inputs.price} onChange={handleChange}/>
                    <label>Price</label>
                </div>

                <div class="form-control">
                    <input name='image' type="text" required value={inputs.image} onChange={handleChange}/>
                    <label>Image</label>
                </div>

                Available : <Checkbox name='available' checked={checked} onChange={()=>setChecked(!checked)}/>  

                <button class="btn">Update</button>

            </form>
    </div>
  )
}

export default BookDetail