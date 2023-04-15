import React from 'react'

export default function Modal({close}) {


  return (
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity p-16">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class=" ">
          <div class=" bg-gray-200 border-b border-gray-300 p-3 flex justify-between px-10">
            <h3 class=" modal-title font-bold text-gray-900" >Filter by type</h3>
            <button onClick={()=>{close(false)}} type="button" class="text-gray-900" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div class="bg-white/80 p-3 grid grid-cols-2 ">
          <div className='group-type'>
					  <input onChange={handleCheckbox} type='checkbox' name='grass' id='grass'/>
					  <label htmlFor='grass'>Grass</label>
				  </div>
				  <div className='group-type'>
					  <input onChange={handleCheckbox} type='checkbox' name='fire' id='fire'/>
					  <label htmlFor='fire'>Fire</label>
				  </div>
				  <div className='group-type'>
					  <input onChange={handleCheckbox} type='checkbox' name='bug' id='bug'/>
					  <label htmlFor='bug'>Bug</label>
				  </div>
				  <div className='group-type'>
					  <input onChange={handleCheckbox} type='checkbox' name='fairy' id='fairy'/>
					  <label htmlFor='fairy'>Fairy</label>
				  </div>
				  <div className='group-type'>
					  <input onChange={handleCheckbox} type='checkbox' name='dragon' id='dragon'/>
					  <label htmlFor='dragon'>Dragon</label>
				  </div>
				  <div className='group-type'>
					  <input onChange={handleCheckbox} type='checkbox' name='ghost' id='ghost'/>
					  <label htmlFor='ghost'>Ghost</label>
				  </div>
				<div className='group-type'>
					<input onChange={handleCheckbox}type='checkbox'name='ground'id='ground'/>
					<label htmlFor='ground'>Ground</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox}type='checkbox'name='normal'id='normal'/>
					<label htmlFor='normal'>Normal</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox}type='checkbox'name='psychic'id='psychic'/>
					<label htmlFor='psychic'>Psychic</label>
				</div>
				<div className='group-type'>
          <input onChange={handleCheckbox} type='checkbox' name='steel' id='steel'/>
					<label htmlFor='steel'>Steel</label>
				</div>
				<div className='group-type'>
          <input onChange={handleCheckbox} type='checkbox' name='dark' id='dark'/>
					<label htmlFor='dark'>Dark</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox} type='checkbox' name='electric' id='electric'/>
					<label htmlFor='electric'>Electric</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox} type='checkbox' name='fighting' id='fighting'/>
					<label htmlFor='fighting'>Fighting</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox} type='checkbox' name='flying' id='flying'/>
					<label htmlFor='flying'>Flying</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox} type='checkbox' name='ice' id='ice'/>
					<label htmlFor='ice'>Ice</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox} type='checkbox' name='poison' id='poison'/>
					<label htmlFor='poison'>Poison</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox} type='checkbox' name='rock' id='rock'/>
					<label htmlFor='rock'>Rock</label>
				</div>
				<div className='group-type'>
					<input onChange={handleCheckbox} type='checkbox' name='water' id='water'/>
					<label htmlFor='water'>Water</label>
				</div>
      </div>
      </div>
    </div>
  </div>
  )
}

