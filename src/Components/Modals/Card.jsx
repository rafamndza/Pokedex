import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { pokemonTypes } from './TypesCustom';


export default function Card({pokemon}) {
    const[pokemonData,setPokemonData]=useState({
        name:'',
        id:'',
        sprites:{other:{dream_world:{front_default:''}}},
        types:[{type:{name:''}},{type:{name:''}}],
        weight:1,
        height:1,
        stats:[{base_stat:'',stat:{name:''}}]
    });

    const getPokemonData=(url)=>{
        axios.get(url)
        .then((response)=>{
            setPokemonData(response.data)
        });
    };

    useEffect(() => {
        getPokemonData(pokemon.url)
    },[pokemon.url])


  return (
    <div className='px-5 py-5 shrink-0 '>
        <div className="grid grid-cols-1 gap-5">
            <div className=" w-3/6 mx-28 sm:w-full sm:ml-0" >
                <div id="card-header" className='flex rounded-lg bg-white h-10 outline outline-offset-0'>
                    <div className='rounded-lg leading-9 outline outline-offset-0 bg-red-600 w-2/6 text-center'>{pokemonData.id}</div>
                    <div className='leading-9 pl-5 capitalize'>{pokemonData.name}</div>
                </div>
                <div id="img-frame" className=' border-4 border-x-black pb-5'>
                    <img className='lg:pl-20 pl-12 h-32' src={pokemonData.sprites.front_default} alt="img-{pokemonData.name}" />
                    <div id='type-frames' className='justify-center text-center  flex   gap-2'>
                    {pokemonData.types.map((type, index) => {
                        const pokemonType = pokemonTypes.find(
                            (t) => t.name === type.type.name);
                            if (pokemonType) {
                                return (
                                    <div key={index} className='flex py-1 px-3 rounded-full capitalize '
                                        style={{ backgroundColor: pokemonType.color }}>
                                        <img className='pr-2' src={pokemonType.src} alt={type.type.name}/>{type.type.name}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div id="details" className='w-full outline outline-offset-0 rounded-lg'>
                    <div className=' flex  gap-1 border-1 py-2'>
                        <div className='grid grid-cols-2 '>
                            <div className=" inline-block">
                                <div className='flex gap-2'>
                                    <i className='fas fa-weight pt-1 pl-5'></i>
                                    <h3>{pokemonData.weight/10}kg</h3>
                                </div>
                                <p className='pl-6'>Weight</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 content-center '>
                            <div className="inline-block">
                                <div className='flex gap-2 justify-center '>
                                    <i className='fas fa-ruler-combined pt-1 pl-10'></i>
                                    <h3>{pokemonData.height/10}m</h3>
                                </div>
                                <p className='pl-5'>Height</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
