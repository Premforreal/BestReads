import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import StarIcon from '@mui/icons-material/Star';
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import './book.css'

  
  const BookDetails = () => {
    
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
          image: String(inputs.image),
          available: Boolean(checked),
          rating: Number(inputs.rating),
        })
        .then((res) => res.data);
    };
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setChecked(!checked);
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
      sendRequest()
    };

    
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
      <div className='stars'>{stars} <p>{inputs.rating} out of 5 stars</p></div>
    );
  }


    return (<>
        {inputs && (
      <div className="Book-details" >
        <div className="image">
            <img src={inputs.image} />
            <button onClick={(e)=>handleSubmit(e)}
                    id={checked ? 'finished' : 'to-read'}>
              {checked ? 'finished' : 'to read'}
              </button>
        </div>
        <div className="description">
            <h2>{inputs.name}</h2>
            <h4>by : {inputs.author}  </h4>
            {reviewStars(inputs.rating)}
            <hr className="new1"/>
            <p>{inputs.description}.</p>
            {/* <p>Reviews : </p> */}
        </div>
      </div>
    )}
    </>)
  };
  
  export default BookDetails;
/*
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

              */