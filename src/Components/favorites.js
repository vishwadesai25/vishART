// favorites.js
import React from 'react';
// import { famousData } from './famousData';
import {favorites} from './Famous'
import { useState, useEffect } from "react";
import axios from "axios"

function Favorites({ favorites },props) {
  const [data,  setdata]=useState([]);
    
  useEffect(()=>{
      axios
      .get(`http://localhost:3001/api/data`)
      .then((response)=>{
          setdata(response.data);
      })
  }, [] );
  return (
    <div>
      <h2>Favorite Arts</h2>
      {favorites.map((data) = (
        <div className="t-card" key={data.heading}>
          <div className="t-image">
            <img src={data.image} alt="image" />
          </div>
          <h4>{data.heading}</h4>
        </div>
      ))}
    </div>
  );
}

export default Favorites;