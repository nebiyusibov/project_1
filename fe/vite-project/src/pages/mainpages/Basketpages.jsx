import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvaider'

function Basketpages() {
  const {basket,deleteBasketCard}=useContext(MainContext)
  return (
    <div className='container'>
      {basket.map((x)=>(
        <div className='card'>
          <h3>{x.name}</h3>
          <h3>{x.surname}</h3>
          <h3>{x.job}</h3>
          <h3>{x.age}</h3>
          <button onClick={()=>deleteBasketCard(x)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Basketpages