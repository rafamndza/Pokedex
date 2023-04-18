import React,{ useContext } from 'react'
import { PokemonContext } from '../context/Provider'
import { pokemonTypes } from './TypesCustom';


export default function SearchModals() {
  const {onePokemon}=useContext(PokemonContext)

  return (
    <div class="p-10  bg-black text-white">
      <div className="wrapper rounded-lg outline outline-offset-0  ">
        <div className="content-wrapper grid ">
          <div className="header">
            <div className=" flex">
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
          <div className="flex justify-center py-2">
            <div className='wrapper grid grid-cols-2 gap-1 md:flex'>
              <div className='pt-1 px-1'>
                <div className="flex justify-center">
                  <i className='fas fa-weight pt-1 px-1'></i>
                  <h3 className=''>{onePokemon?.weight/10} kg</h3>
                </div>
                <p className='px-3'>Weight</p>
              </div>
              <div className='pt-1 px-1'>
                <div className="flex justify-center">
                  <i className='fas fa-ruler-combined pt-1 px-1'></i>
                  <h3 className=''>{onePokemon?.height/10} m</h3>
                </div>
                <p className='px-3'>Height</p>
              </div>
            </div>
          </div>
        </div>  
          <div class="border-b-2 border-gray-500 opacity-50"></div>
          <div className="stats flex justify-center gap-2">
              <div className='inline-block'>
                <div className='flex justify-center'>
                  <h3>Stats</h3>
                </div>
                <div className="flex">
                <div className="grid grid-cols-3 pb-3">
                  <div className="px-2">
                    <p>HP:</p>
                    <p>ATTACK:</p>
                    <p>DEFENSE:</p>
                    <p>SP.ATTACK:</p>
                    <p>SP.DEFENSE:</p>
                    <p>SPEED:</p>
                  </div>
                  <div className="px-4 text-center w-24">
                    <p>{onePokemon?.hp}</p>
                    <p>{onePokemon?.attack}</p>
                    <p>{onePokemon?.defense}</p>
                    <p>{onePokemon?.special_attack}</p>
                    <p>{onePokemon?.special_defese}</p>
                    <p>{onePokemon?.speed}</p>
                  </div>
                </div>
                <div className="px-2">
                  <progress className='rounded-lg'  max="255" value={onePokemon?.hp}></progress><br />
                  <progress  max="115" value={onePokemon?.attack}></progress> <br />
                  <progress  max="230" value={onePokemon?.defense}></progress><br />
                  <progress  max="200" value={onePokemon?.special_attack}></progress><br />
                  <progress  max="230" value={onePokemon?.special_defese}></progress><br />
                  <progress  max="130" value={onePokemon?.speed}></progress><br />
                </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}
