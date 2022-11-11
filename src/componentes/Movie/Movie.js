import React from 'react'
import Row from '../Row/Row'
import Pops from '../../request/api'
import "./Movie.css"

function Movie() {
  return (
  <div className='movie'>
    {Pops.map((movi)=>{
        return (
          <Row 
            key={movi.name}
            title={movi.title}
            path={movi.path}
          />
        );
      })}
  </div>
  );
}

export default Movie