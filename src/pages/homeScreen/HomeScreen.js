import React from 'react'
import Banner from '../../componentes/Banner/Banner'
import Movie from '../../componentes/Movie/Movie'
import Nav from '../../componentes/Nav/Nav'
import "./HomeScreen.css"

function HomeScreen() {
  return (
  <div className='homeScreen'>
    <Banner/>
    <Nav/>
    <Movie/>
  </div>
  );
}

export default HomeScreen