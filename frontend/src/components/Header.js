import React,{useState} from 'react'
import {AppBar,Tab,Tabs, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink ,useNavigate} from 'react-router-dom'

const Header = () => {
  const next = useNavigate()
  const [value ,setValue] = useState();
  return (
    <AppBar sx={{backgroundColor:"#232f3d"}} position='sticky'>
        <Toolbar>
          <Typography><LibraryBooksIcon onClick={()=>{next('/')}}/><span onClick={()=>{next('/')}}>Books</span></Typography>
          <Tabs sx={{ml:'auto'}}
          textColor="inherit" indicatorColor="secondary" 
          value={value}  onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label='Add Product' />
            <Tab LinkComponent={NavLink} to="/books" label='Books'/>
            <Tab LinkComponent={NavLink} to="/about" label='About us'/>
          </Tabs>
        </Toolbar>
    </AppBar>
  )
}

export default Header;