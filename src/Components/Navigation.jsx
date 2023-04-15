import React, { useContext} from 'react'
import SocialMedia from './SocialMedia'
import { PokemonContext } from './context/Provider'

export default function Navigation() {

  const {handleSubmit,handleName} = useContext(PokemonContext)

  return (
    <div className=' static bg-red-500 h-14  '>
      <nav className='flex justify-around items-center'>
        <div className="logo">
          <img className='h-14' src="./src/assets/Icons/logo.svg" alt="pokemon-logo" />
        </div>
        <div>
          <form className='w-96 flex items-center  '>
            <input onChange={handleName} className='rounded-full h-8 w-5/6 outline-none	indent-4' type="text" placeholder='search you pokemon'/>
            <button onClick={handleSubmit} className='w-1/6 items-center' type='submit' >
              <i class="fa fa-search h-35 text-white font-bold"></i>
            </button>
          </form>
        </div>
        <div>
          <SocialMedia/>
        </div>
      </nav>
    </div>
  )
}


