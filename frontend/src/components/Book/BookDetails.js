import React ,{useEffect,useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Button,Box,TextField,getCheckboxUtilityClass,FormLabel } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const BookDetails = () => {
  const [inputs, setInputs] = useState({})
  const [checked , setChecked] = useState(false);
  const id= useParams().id;
  const history =useNavigate()

  useEffect(() => {
    const fetchHandler = async ()=>{
      await axios.get(`http://localhost:5000/books/${id}`)
      .then((res)=>res.data)
      .then((data)=>setInputs(data.book))
    };
    fetchHandler()
  }, [id])

  const sendRequest = async ()=>{
    await axios.put(`http://localhost:5000/books/${id}`,{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    sendRequest().then(()=>history("/books"))
  }
  const handleChange=(e)=>{
   setInputs((preveState)=>({
      ...preveState,
      [e.target.name]:e.target.value

    }))
  }

  return (
    <div>
         <form onSubmit={handleSubmit}>
      <Box display="flex" 
      flexDirection="column" 
      justifyContent={'center'} 
      maxWidth={700}
      alignSelf="center"
      marginLeft={'auto'}
      marginRight={'auto'}
      marginTop={8}
      >
         <FormLabel>Name</FormLabel>
         <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth varient="outlined" name="name" />
         <FormLabel>Athour</FormLabel>
         <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth varient="outlined" name="author" />
         <FormLabel>Description</FormLabel>
         <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth varient="outlined" name="description" />
         <FormLabel>Image</FormLabel>
         <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth varient="outlined" name="image" />
         <FormLabel>Price</FormLabel>
         <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth varient="outlined" name="price" />
         <FormControlLabel control={ <Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} label="Available" />
        <Button type='submit' variant="contained">Update </Button>
      </Box>
      
    </form>
    </div>
  )
}

export default BookDetails
