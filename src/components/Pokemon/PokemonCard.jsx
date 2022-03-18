import React from 'react';
import spinner from '../../assets/images/spinner.webp';
import missingno from '../../assets/images/defaults/missingno.webp';
import unknown from '../../assets/images/defaults/unknown.webp';
import { Link } from 'react-router-dom';
import { getPokemon } from '../../services/pokeapi';
import { importAssets, classNames, colorType } from '../../services/assets';

function PokemonCard ({ name }) {
  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const pokemon = await getPokemon(name);
        setPokemon(pokemon);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [name]);
  const types = importAssets(require.context('../../assets/images/types', false, /\.(webp)$/));

  if (loading) {
    return (
      <div
        className='flex flex-col justify-between pb-3 m-3 text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 sm:w-5/12 lg:w-1/5'
      >
        <img src={spinner} alt='Loading' className='self-center w-40 h-40 my-14 animate-spin' />
        <span className='text-lg font-black'>Loading ...</span>
      </div>
    );
  }

  if (pokemon === null) {
    return (
      <div
        className='flex flex-col justify-between pb-3 m-3 text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 sm:w-5/12 lg:w-1/5'
      >
        <img src={missingno} alt='Pokémon MissingNo' className='self-center w-full h-40 my-14' />
        <span className='text-lg font-black'>Unknown</span>
      </div>
    );
  }

  return (
    <Link
      to={`/pokemons/${name}`}
      className='relative flex flex-col justify-between pb-3 m-3 text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 sm:w-5/12 lg:w-1/5'
    >
      {pokemon.types.map((type, key) => (
        <div
          key={key}
          className={classNames(
            key === 1 ? 'right-3' : 'left-3', `z-10 absolute w-10 h-auto top-3 p-2 rounded-full ${colorType(type.shortName)} hover:scale-110 duration-150`
          )}
        >
          <img
            src={types[`${type.shortName}.webp`]}
            alt={type.fullName + ' type'}
            className='w-full'
          />
        </div>
      ))}
      <img
        src={pokemon.image ?? unknown}
        alt={'Pokémon ' + pokemon.name}
        className='w-full h-auto mt-5 mb-3 pixelated drop-shadow-centerLight dark:drop-shadow-centerDark'
      />
      <span className='text-lg font-black'>{pokemon.name}</span>
    </Link>
  );
}

export default PokemonCard;
