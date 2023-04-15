import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const PokemonContext =createContext(null);



export default function Provider( {children} ) {

  const [listOfPokemons,setListOfPokemons]=useState([]);
  const [offset,setOffSet]=useState(0);
  const [currentPage,setCurrentPage]=useState(0);
  const [totalPages,setTotalPages]=useState(0);

  

  const getlistOfPokemons = ()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then((response) => {
        setListOfPokemons(response.data.results);
        setTotalPages(Math.round(response.data.count/20)+1)
        setCurrentPage((offset/20)+1)
    });
  };

  useEffect(() => {
    getlistOfPokemons();
  },[offset]);

  //Filter

  

  return (
    <PokemonContext.Provider value={{
      offset,
      setOffSet,
      listOfPokemons,
      currentPage,
      totalPages,


    }}>
        {children}
    </PokemonContext.Provider>
  )
}
