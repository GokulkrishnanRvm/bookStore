import React from 'react'
import { FcAdvance } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const next = useNavigate()
  return (
    <div className="hero">
      <h1 className="title">Books</h1>
      <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Fuga totam possimus placeat, facere sapiente pariatur!
          Asperiores repellendus 
        numquam consectetur molestiae.
      </p>
      <button type="submit" onClick={()=>{next('/books')}} >Explore</button>
    </div>
  )
}

export default Home;