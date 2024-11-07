import React from 'react';
import './Pokecard.css'

const Pokecard =({id, name, type, base_experience})=>{
const imgUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <>
    <div className="Pokecard">
        <h3>{name}</h3>
        <img src={imgUrl} alt=""/>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
    </>
  )  
}

export default Pokecard;