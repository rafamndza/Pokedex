import React from 'react'

export default function MoreDetails() {
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

        <div class="bg-white/80 p-3">
        ...
        </div>
        <div class="flex justify-center bg-gray-200 border-t border-gray-300 p-3 ">
          <button type="button" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" data-dismiss="modal">Close</button>
          <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  )
}
