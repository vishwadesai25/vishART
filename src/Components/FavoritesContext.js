import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const FavoritesContext = createContext();

export function FavoritesProvider({ favorites }) {
  const [favorite, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error('Error fetching favorites:', error);
      });
  }, []);

  return (
    <FavoritesContext.Provider value={favorite}>
      {favorites}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
