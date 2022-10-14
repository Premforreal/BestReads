import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import UpdateIcon from '@mui/icons-material/Update';
import StarIcon from '@mui/icons-material/Star';
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams,Link } from "react-router-dom";
  import './book.css';
  import {Button} from '@mui/material'; 

  
  const BookDetails = () => {
    
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    const [alert,setAlert] =useState(false);
    
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`https://best--reads.herokuapp.com/books/${id}`) /*http://localhost:5000/books/${id} */
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
      setChecked(!checked);
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
      sendRequest()
    };

    async  function deleteHandler(){
      await  axios.delete(`https://best--reads.herokuapp.com/books/${id}`) 
             .then((res)=>res.data)
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
              <div style={{paddingTop:'1vh'}}>
                  <Button LinkComponent={Link} to={`/books/${id}/update`}><UpdateIcon/></Button>
                  <Button onClick={()=>setAlert(!alert)}><DeleteRoundedIcon/></Button>
              </div>
        </div>
        <div className="description">
            <h2>{inputs.name}</h2>
            <h4>by : {inputs.author}  </h4>
            {reviewStars(inputs.rating)}
            <hr className="new1"/>
            <p>{inputs.description}</p>
            {/* <p>Reviews : </p> */}
        </div>
      </div>
    )}
    
    {alert &&
    <div className="popup">
          Are you sure you want to delete this book?
          <div className='btns'>
          <button id='no' onClick={()=>setAlert(!alert)}>No</button>
          <button id='yes' onClick={deleteHandler}>Yes</button>
          </div>
        </div>}
    </>)
  };
  
  export default BookDetails;