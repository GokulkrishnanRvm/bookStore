import { Button } from '@mui/material';
import React,{useEffect} from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';


const Book = (book) => {
    const history = useNavigate()
    const {_id,name,author,description,price,image} =book
    const deleteBook = async ()=>{
      await axios.delete(`http://localhost:5000/books/${_id}`)
      .then((response)=>response.data).then(()=>{history('/books')})
      .then(window.location.reload(true))
    }
  
  return (
    <div className="card">
        <img src={image} alt={name} />
        <p className="img-footer"><span><DriveFileRenameOutlineIcon /></span>author</p>
        <article>{author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs :{price}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"auto"}}>Update</Button>
        <Button onClick={deleteBook}sx={{mt:"auto"}}>Delete</Button>
    </div>
  )
}
export default Book;
