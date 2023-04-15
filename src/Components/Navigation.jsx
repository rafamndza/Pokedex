import React, { Component } from 'react'
import SocialMedia from './SocialMedia'

export default class Navigation extends Component {
  render() {
    return (
      <div className='bg-red-500 h-14 relative '>
          <nav className='flex justify-around items-center'>
            <div className="logo">
                <img className='h-14' src="./src/assets/Icons/logo.svg" alt="pokemon-logo" />
            </div>
            <div>
              <form action="" className='w-96 flex items-center  '>
                <input className='rounded-full h-8 w-5/6 outline-none	indent-4' type="text"/>
                <button className='w-1/6 items-center' >
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
}

