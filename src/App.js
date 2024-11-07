import React from 'react';
import Pokedex from './Pokedex.js';
import pokemon from './Pokemon';
import './App.css';

function App() {
  return (
    <>
    <h3 className='header'>Pokedex</h3>
    <div className="App">
      <Pokedex pokemon={pokemon}/>
    </div>
    </>
  );
}

export default App;