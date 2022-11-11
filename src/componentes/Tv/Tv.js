import React from 'react'
import Row from '../Row/Row'
import Pops from '../../request/api'
import "./Tv.css"

function Tv() {
  return (
  <div className='Tv'>
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

export default Tv