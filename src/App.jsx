import React from 'react'
import Provider from './Components/context/Provider'
import Navigation from './Components/Navigation'
import Filter from './Components/Filter'
import ListOFPokemons from './Components/ListOfPokemons'

import Footer from './Components/Footer'


function App() {
  
  return (
    <Provider>
      <Navigation/>
      <Filter/>
      <ListOFPokemons/>
      <Footer/>
    </Provider>
  )
}


export default App
