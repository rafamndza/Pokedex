import React,{ useContext } from 'react'
import { PokemonContext } from '../context/Provider'


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
        <div className="content-wrapper grid  grid-cols-3">
          <div className="col">
            <div className="img-container">
              <img src={onePokemon?.img} alt="" />
            </div>
          </div>

          <div className="col"></div>

          <div className="col"></div>
        </div>

        <div class="bg-white/80 p-3">
          ...
        </div>
      </div>
  </div>
  )
}
