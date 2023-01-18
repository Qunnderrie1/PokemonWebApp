import React from 'react'
import '../App.css'

export const PokemonCard = ({id , img ,name , num , weakness , type}) => {
  return (
    <div key={id} className='cardContainer container'>
       <p className='pokemonId'>{num}</p>
        <img src={img} alt="" />
        <div className='descriptionContainer'>
        <h3>{`${name}`}</h3>
        <hr />
        <p>{`Type: ${type.join(" , ")}`}</p>
            <article>
              <p>{`Weakness: ${weakness.join(" , ")}`}</p>
            </article>
        </div>
    </div>
  )
}   
