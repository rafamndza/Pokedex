import React,{useContext} from 'react'
import { PokemonContext } from './context/Provider';



export default function Pagination() {
  const { offset, setOffSet, currentPage, totalPages } = useContext(PokemonContext);

  const handleNext =()=>{
    setOffSet(
      offset+20
    );
    console.log(offset)
  };

  const handlePrevious =()=>{
    setOffSet(
      offset-20
    )
    console.log(offset)
  }

  return (
    <div className="flex justify-center text-black  gap-2 pb-4">
      <button onClick={handlePrevious} className=''>{'<'}</button>
      <p className='align-middle px-5'>{currentPage} of {totalPages}</p>
      <button  onClick={handleNext} className=' '>{'>'}</button>
    </div>
  );
}
