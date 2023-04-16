import React,{ useContext } from 'react'
import { PokemonContext } from '../context/Provider'
import { pokemonTypes } from './TypesCustom';


export default function SearchModals() {
  const {onePokemon}=useContext(PokemonContext)

  return (
    <div class="p-10 shrink bg-black text-white">
      <div className="wrapper rounded-lg outline outline-offset-0  ">
        <div className="content-wrapper grid">
          <div className="header">
            <div className="bg-orange-500 flex">
              <div className='absolute rounded-lg outline outline-offset-0 w-10 flex justify-center py-1.5 text-white bg-black'> 
                <div className=''>#{onePokemon?.id}</div>
              </div>
              <div className=' rounded-lg outline outline-offset-0 w-full flex justify-center py-1.5'>
                <div className='capitalize'>{onePokemon?.name}</div>
              </div>
            </div>
          </div>
          <div className="image-wrapper flex place-content-center">
            <img  className='w-36 h-36' src={onePokemon?.img} alt={onePokemon?.img} />
          </div>
          <div className="content flex place-content-center items-center gap-2 ">
            {onePokemon?.types?.map((type, index) => {
              const pokemonType = pokemonTypes?.find(
                (t) => t?.name === type?.type?.name);
                if (pokemonType) {
                  return (
                    <div key={index} className='flex py-1 px-3 pr-6 rounded-full capitalize '
                      style={{ backgroundColor: pokemonType?.color }}>
                      <img className='pr-2' src={pokemonType?.src} alt={type?.type?.name}/>{type?.type?.name}
                    </div>
                  )
                }
              }
            )}
          </div>
          <div className="flex">
            <div className='grid grid-cols-2 '>
              <div className=" inline-block">
                <div className='flex justify-center gap-2'>
                  <i className='fas fa-weight'></i>
                  <h3>{onePokemon?.weight/10}kg</h3>
                </div>
              <p className=''>Weight</p>
            </div>
          </div>
          <div className='grid grid-cols-2 content-center '>
            <div className="inline-block">
              <div className='flex gap-2 justify-center '>
                <i className='fas fa-ruler-combined pt-1 pl-10'></i>
                <h3>{onePokemon?.height/10}m</h3>
              </div>
              <p className='pl-5'>Height</p>
            </div>
          </div>    
        </div>
      </div>

          <div class="hidden sm:left-1/2 sm:-ml-0.5 sm:w-0.5 sm:h-full bg-gray-600"></div>
          <div class="bg-black w-full"></div>
        </div>
      </div>
    
  )
}
