import {Checkbox} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookUpdate = () => {
  
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://best--reads.herokuapp.com/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`https://best--reads.herokuapp.com/books/${id}`, { 
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        image: String(inputs.image),
        available: Boolean(checked),
        rating: Number(inputs.rating),
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

  return (<>
      {inputs && (
    <div className="container"><h1>Update Book</h1>
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
                    <input name='rating' type="number" required value={inputs.rating} onChange={handleChange}/>
                    <label>Rating</label>
                </div>

                <div className="form-control">
                    <input name='image' type="text" required value={inputs.image} onChange={handleChange}/>
                    <label>Image</label>
                </div>

                Finished reading : <Checkbox name='available' checked={checked} onChange={()=>setChecked(!checked)}/>  

                <button className="btn">Update</button>

            </form>
    </div>
  )}
  </>)
};

export default BookUpdate;