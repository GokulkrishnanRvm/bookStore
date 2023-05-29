const express = require('express')
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const router = require('./routes/bookRoutes')
const cors = require('cors')
const Book = require('./model/book')

app.use(cors());
mongoose.connect('mongodb://localhost:27017/bookstore',{useNewUrlParser:true , useUnifiedTopology:true})
.then(()=>{
   console.log('Database connected');
})
.catch((err)=>{
   console.log('Database connection error');
   console.log(err);
})

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/books',router)

app.listen(5000,()=>{
   console.log('Port 5000 is open');
})