import React, { useState } from 'react'
import Modal from './Modals/Modal';

export default function Filter() {
  
  const [filter,setFilter]=useState(false)

  return (
    <div className='flex pl-10 py-5 '>
      <button onClick={()=>{setFilter(true)}} id='open-modal' className=' outline outline-black	 rounded-full flex gap-2 h-10 justify-center'>
        <i class='fas fa-sliders-h align-middle pl-4 pt-3'></i>
        <p className='pt-2 pr-4'>Filter by Type</p>
      </button>
      {filter && <Modal close={setFilter}/>}
    </div>
  )
}
