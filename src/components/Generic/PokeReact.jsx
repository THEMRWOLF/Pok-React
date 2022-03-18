import React from 'react';
import icon from '../../assets/images/icon.webp';

function PokeReact () {
  return (
    <div className='flex flex-col flex-wrap flex-grow w-full px-4 pt-4 max-w-7xl pb-11 sm:px-11 lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'>
      <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>PokéReact</h1>
      <div className='flex flex-col justify-between flex-grow w-full mt-5 text-xs text-center sm:text-sm md:text-base lg:text-lg'>
        <img
          src={icon}
          alt='PokéReact icon'
          className='block mx-auto h-60'
        />
        <p className=''>Pokédex made in React designed to get information related to the Pokémon series.</p>
        <div className='flex flex-wrap justify-around'>
          <div className='m-3 text-center w-60'>
            <img
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
              alt='Pokémon Venusaur'
              className='block w-full pixelated'
            />
            <p>Explore the different Pokémons appeared through the series and checkout what they have to show you.</p>
          </div>
          <div className='m-3 text-center w-60'>
            <img
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-normal.png'
              alt='Item TM'
              className='block w-full pixelated'
            />
            <p className=''>Consult the moves attributes to prepare yourself for every combat.</p>
          </div>
          <div className='m-3 text-center w-60'>
            <img
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
              alt='Item Poké Ball'
              className='block w-full pixelated'
            />
            <p>Dig into the items and discover the effects which can cause for every situation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeReact;
