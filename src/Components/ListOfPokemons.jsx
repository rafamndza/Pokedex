import React,{useContext} from 'react'
import { PokemonContext } from './context/Provider';
import DisplayPokemons from './Modals/DisplayPokemons';
import Pagination from './Pagination';


export default function ListOfPokemons() {

  const { listOfPokemons } = useContext(PokemonContext);

  
  return (
    <div>
      <DisplayPokemons pokemons={listOfPokemons}  />
      <Pagination pokemons={listOfPokemons}/>
    </div>
  )
}
