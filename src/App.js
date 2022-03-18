import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContentBox from './components/ContentBox';
import Navbar from './components/Navbar';
import PokemonsList from './components/Pokemon/PokemonsList';
import Pokemon from './components/Pokemon/Pokemon';
import MovesList from './components/Move/MovesList';
import Move from './components/Move/Move';
import ItemsList from './components/Item/ItemsList';
import Item from './components/Item/Item';
import About from './components/Generic/About';
import PokeReact from './components/Generic/PokeReact';
import Error from './components/Generic/Error';

function App () {
  return (
    <>
      <Router>
        <Navbar />
        <ContentBox>
          <Routes>
            <Route path='/' element={<PokeReact />} />
            <Route path='/pokemons' element={<PokemonsList />} />
            <Route path='/pokemons/:name' element={<Pokemon />} />
            <Route path='/moves' element={<MovesList />} />
            <Route path='/moves/:name' element={<Move />} />
            <Route path='/items' element={<ItemsList />} />
            <Route path='/items/:name' element={<Item />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </ContentBox>
      </Router>
    </>
  );
}

export default App;
