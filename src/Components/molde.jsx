
        <div className='fixed inset-0'>
            <div className="modal-wrapper">
                <div className="modal-wrapper-flex">
                    <div className="modal-icon">Icono</div>
                    <p class="modal-title font-bold text-lg">Filter by Type</p>
                    <button id='close' type="button" class=" align close text-gray-500 hover:text-gray-600" data-dismiss="modal" aria-label="Close">
                        <span className='' aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div class="modal-body py-5">
                <p>Logica para poner filtros</p>
            </div>
            <div className="px-4 py-3 flex justify-center items-center  border-gray-300">
                <div class=" flex justify-center items-center border-t">
                    <button id='save' type="button" class="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Save Filters
                    </button>
                    <button id='remove' type="button" class="btn bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-3" data-dismiss="modal">
                    Remove Filters
                    </button>
                </div>
            </div>
        </div>
