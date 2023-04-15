import React from 'react'
import Provider from './Components/context/Provider'
import Navigation from './Components/Navigation'
import Filter from './Components/Filter'
import ListOFPokemons from './Components/ListOfPokemons'

import Footer from './Components/Footer'
import SearchModals from './Components/Modals/SearchModal'


function App() {
  
  return (
    <Provider>
      <Navigation/>
      <SearchModals/>
      <Filter/>
      <ListOFPokemons/>
      <Footer/>
    </Provider>
  )
}


export default App
