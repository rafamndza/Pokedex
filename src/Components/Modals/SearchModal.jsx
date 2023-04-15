import React,{ useContext } from 'react'
import { PokemonContext } from '../context/Provider'
import { pokemonTypes } from './TypesCustom';


export default function SearchModals() {
  const {onePokemon}=useContext(PokemonContext)

  return (
    <div class="p-10 bg-slate-400">
      <div className="wrapper rounded-lg outline outline-offset-0  ">
        <div class="bg-red-300 header">
          <div className='text-center font-extrabold'>
            <h2>Stats</h2>
          </div>
        </div>
        <div className="content-wrapper grid  grid-cols-2">
          <div className="col p-4 w-2/6 h-2/6">
            <div className="w-36 h-36 rounded-lg outline outline-offset-0"> 
              <img  className=' w-36 h-36' src={onePokemon?.img} alt={onePokemon?.img} />
            </div>
            <div className="mt-5 w-36 h-36  text-center">
              <div className=''>#{onePokemon?.id}</div>
              <div className='capitalize'>{onePokemon?.name}</div>
              <div className='flex justify-center'>
              {onePokemon?.types?.map((type, index) => {
                        const pokemonType = pokemonTypes?.find(
                            (t) => t?.name === type?.type?.name);
                            if (pokemonType) {
                                return (
                                    <div key={index} className='flex py-1 px-3 pr-6 rounded-full capitalize '
                                        style={{ backgroundColor: pokemonType?.color }}>
                                        <img className='pr-2' src={pokemonType?.src} alt={type?.type?.name}/>{type?.type?.name}
                                    </div>
                                );
                            }
                        })}
              </div>

              <div className='stats'>
                <div className='grid grid-cols-2 '>
                  <div className=" inline-block">
                    <div className='flex gap-2'>
                      <i className='fas fa-weight pt-1 pl-5'></i>
                      <h3>{onePokemon?.weight/10}kg</h3>
                    </div>
                    <p className='pl-6'>Weight</p>
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
            <div className="col">

            </div>
          </div>
          <div class="bg-white/80 p-3">
          ...
          </div>
        </div>
      </div>
    </div>
  )
}
