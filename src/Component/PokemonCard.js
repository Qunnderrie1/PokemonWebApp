import React from 'react'
import '../App.css'

export const PokemonCard = ({id , img ,name , num , weakness , type}) => {
  return (
    <div key={id} className='cardContainer container'>
       <p>{num}</p>
        <img src={img} alt="" />
        <div className='descriptionContainer'>
        <h3>{`${name}`}</h3>
        <p>{`Type: ${type}`}</p>
            <article>
              <p>Weakness: {weakness}</p>
            </article>
        </div>
    </div>
  )
}   
