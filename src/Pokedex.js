import React from 'react';
import pokemon from './Pokemon.js';
import Pokecard from './Pokecard.js';
import './Pokedex.css';

function Pokedex({ pokemon }) {
    return (
      <div className="Pokedex">
        <div className="Pokedex-cards">
          {pokemon.map(p => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
  export default Pokedex;