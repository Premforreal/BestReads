import React,{useState} from 'react';
import {useNavigation} from 'react-router-dom';
import {TextField} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import './Book/book.css';
import axios from 'axios';

function Addbook() {
  const [checked,setChecked] = useState(false)
  const [inputs, setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    available:checked,
    image:''
  })


function handleChange(e){
  setInputs((prevState)=>({
    ...prevState,[e.target.name]:e.target.value
  }))
}

const sendRequest = async()=>{
  axios.post("http://localhost:5000/books",{
    name : String(inputs.name),
    description : String(inputs.description),
    price : Number(inputs.price),
    author : String(inputs.author),
    available : Boolean(checked),
    image : String(inputs.image),
  }).then(res=>res.data);
}

function handleSubmit(e){
  e.preventDefault();
  sendRequest().then(  )
} 
  
  return (
<div class="container">
            <h1>Add Book</h1>
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

                <button class="btn">Add</button>

            </form>
        </div>
  )
}

export default Addbook
