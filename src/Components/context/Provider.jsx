import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const PokemonContext =createContext(null);



export default function Provider( {children} ) {

  const [listOfPokemons,setListOfPokemons]=useState([]);
  const [offset,setOffSet]=useState(0);
  const [currentPage,setCurrentPage]=useState(0);
  const [totalPages,setTotalPages]=useState(0);


  
  const getListOfPokemons = ()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
      .then((response) => {
        setListOfPokemons(response.data.results);
        setTotalPages(Math.round(response.data.count/20)+1)
        setCurrentPage((offset/20)+1)
    });
  };

  useEffect(() => {
    getListOfPokemons();
  },[offset]);



  //    Searchbar

  const [onePokemon,setOnePokemon]=useState({
    name:'',
    img:'',
    id:'',
    types:[{},{}],
    weight:'',
    height:'',
    hp:'',
    attack:'',
    defense:'',
    special_attack:'',
    special_defese:'',
    speed:''
  
  });
  
  const getDetails = async ()=>{
    const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${onePokemon.name}`);
    const data =await res.json();
    setOnePokemon({
      img:data.sprites.front_default,
      name:data.name,
      id:data.id,
      types:data.types,
      weight:data.weight,
      height:data.height,
      hp:data.stats[0].base_stat,
      attack:data.stats[1].base_stat,
      defense:data.stats[2].base_stat,
      special_attack:data.stats[3].base_stat,
      special_defese:data.stats[4].base_stat,
      speed:data.stats[5].base_stat
    });
    
  };
  
  const handleName = (e) => {
    const aux = e.target.value.toLowerCase();
    setOnePokemon({
        name:aux
    });
  };
  
  const handleSubmit = (e) => {
    const name = onePokemon.name;
    e.preventDefault();
    getDetails();
  };
  console.log(onePokemon)
  return (
    <PokemonContext.Provider value={{
      offset,
      setOffSet,
      listOfPokemons,
      setListOfPokemons,
      currentPage,
      totalPages,
      handleSubmit,
      handleName,
      onePokemon,

    }}>
        {children}
    </PokemonContext.Provider>
  )
}
