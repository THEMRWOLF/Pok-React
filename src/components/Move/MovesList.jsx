import React from 'react';
import spinner from '../../assets/images/spinner.webp';
// import Search from '../Search';
import { Paginator } from '../Pagination/Paginator';
import CardsContainer from '../CardsContainer';
import MoveCard from './MoveCard';
import Error from '../Generic/Error';
import { getMovesNamesList /* searchMovesNames */ } from '../../services/pokeapi';

function MovesList () {
  const [movesNames, setMovesNames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function fecthMovesNames () {
    const moveslist = await getMovesNamesList();
    return moveslist;
  }

  React.useEffect(() => {
    (async () => {
      try {
        const movesNames = await fecthMovesNames();
        setMovesNames(movesNames);
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

  if (movesNames === null) {
    return (
      <Error number='500' text='Internal server error' />
    );
  }

  return (
    <>
      {/* <Search func={searchMovesNames} place='Salpicadura' /> */}
      <Paginator elements={movesNames} elementsPerPage={20} CardsContainer={CardsContainer} Card={MoveCard} />
    </>
  );
}

export default MovesList;
