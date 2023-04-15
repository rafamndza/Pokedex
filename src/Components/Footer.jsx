import React from 'react'

export default function Footer() {
  return (
    <div className='flex absolute bottom-100 w-full  bg-black sm:gap-16 place-content-center '>
      <div className=" inline-block">
      <p className='text-white/75'>All content on this website, including  graphics, logos, artwork and other files, is the property of <a className='text-white ' href="https://www.nintendo.co.uk/Legal-information/Copyright/Copyright-625949.html">Nintendo©</a></p>
      <p className='text-white/75' >Data obtained thanks to <a className='text-white' href="https://pokeapi.co/">PokeApi</a></p>
      </div>
    </div>
  )
}
