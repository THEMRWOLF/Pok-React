import React from 'react';
import spinner from '../../assets/images/spinner.webp';
// import Search from '../Search';
import { Paginator } from '../Pagination/Paginator';
import CardsContainer from '../CardsContainer';
import PokemonCard from './PokemonCard';
import Error from '../Generic/Error';
import { getPokemonsNamesList /* searchPokemonsNames */ } from '../../services/pokeapi';

function PokemonsList () {
  const [pokemonsNames, setPokemonsNames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function fecthPokemonsNames () {
    const pokelist = await getPokemonsNamesList();
    return pokelist;
  }

  React.useEffect(() => {
    (async () => {
      try {
        const pokemonsNames = await fecthPokemonsNames();
        setPokemonsNames(pokemonsNames);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className='flex flex-grow'>
        <img src={spinner} alt='Loading' className='self-center w-60 h-60 animate-spin' />
      </div>
    );
  }

  if (pokemonsNames === null) {
    return (
      <Error number='500' text='Internal server error' />
    );
  }

  return (
    <>
      {/* <Search func={searchPokemonsNames} place='Ratata' /> */}
      <Paginator elements={pokemonsNames} elementsPerPage={8} CardsContainer={CardsContainer} Card={PokemonCard} />
    </>
  );
}

export default PokemonsList;
