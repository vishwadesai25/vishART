import React from 'react'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import Register from './Register'
import Login from './login'
import Home from "./Components/home";
import Famous from "./Components/Famous";
import Contact from "./Components/contact";
import Art from "./Components/art";
import WebDesign from "./Components/webDesign";
import WebFeature from "./Components/webFeature";
import Profile from './Profile';
import Canvas from './Components/canvas';
// import { famousData } from './Components/famousData'
import { artData } from './Components/artData'
import {penStyles} from './Components/canvasPens'
import Navbar from './Components/Famous';
import Navbar1 from './Components/navbar1';
import Favorites from './Components/favorites';
import {favorites} from './Components/Famous';
import Main from './Components/Main'
import Quote from './Components/Quotes'
import { useEffect } from 'react'
import axios from 'axios'
// import {famousData} from '../Backend/index'

const App = () => {
  // const location = useLocation()
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const [data,  setdata]=useState([]);
    
  useEffect(()=>{
      axios
      .get(`http://localhost:3001/api/data`)
      .then((response)=>{
          setdata(response.data);
      })
  }, [] );

  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/Quote" element={<Quote/>}/>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/WebDesign" element={<WebDesign />} />
          <Route path="/WebFeature" element={<WebFeature />} />
          <Route path="/Art" element={<Art product={artData}/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/Canvas" element={<Canvas product={penStyles}/>}/>
          <Route path="/Navbar1" element={<Navbar1/>}/>
          <Route path="/Famous" element={<Famous product={data}/>} />
          <Route path="/Favorites" element={<Favorites product={data}/>}/>
          {/* <Route path="/Famous" element={<Famous product={famousData}/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;