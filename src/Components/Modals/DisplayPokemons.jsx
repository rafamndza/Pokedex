import React from 'react'
import Card from './Card'



export default function DisplayPokemons({pokemons}) {

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {pokemons.map((pokemon,index) => (
            <Card key={index} pokemon={pokemon}/>
      ))}
      </div>
    </div>
  )
}
