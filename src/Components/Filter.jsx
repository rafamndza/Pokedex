import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from './context/Provider';

export default function Filter() {

  const {listOfPokemons,setListOfPokemons}= useContext(PokemonContext)

  const [types,setTypes]=useState([
    {"name":"normal","url":"https://pokeapi.co/api/v2/type/1/"}
  ]);
  
  const getTypes = async()=>{
    const res = await axios.get(`https://pokeapi.co/api/v2/type`)
    const data= res.data.results
    setTypes(data)
  };

  useEffect(() => {
    getTypes();
  }, [])

  const handleSelection = async (e) => {
    const selectedTypeUrl = e.target.value;
    const res = await axios.get(selectedTypeUrl);
    const data = res.data.pokemon.map((p) => p.pokemon);
    setListOfPokemons(data);
  };

  console.log(listOfPokemons)
  


  return (
    <div className='ml-10 w-18'>
      <select name="select" id="pokemonFlter" onChange={handleSelection}>
        <option value="" disabled >Select a type</option>
        {types.map(type => (
          <option key={type.name} value={type.url}>{type.name}</option>
        ))}
      </select>
    </div>
  )
}
