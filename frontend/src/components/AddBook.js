import React,{useState} from 'react'
import { Button,Box,TextField ,FormLabel } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
  const history = useNavigate()
  const [checked, setChecked] = useState(false)
  const [inputs, setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    image:''
  })
  const handleChange= (e)=>{
    setInputs((preveState)=>({
      ...preveState,
      [e.target.name]:e.target.value

    }))
  }
  const sendRequest = async ()=>{
      await axios.post("http://localhost:5000/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data)
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('/books'))
  }
  return (
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
        <Button type='submit' variant="contained">Add </Button>
      </Box>
      
    </form>
  )
}

export default AddBook
