import React from 'react';
import spinner from '../../assets/images/spinner.webp';
import { Link } from 'react-router-dom';
import { getMove } from '../../services/pokeapi';
import { importAssets, colorType } from '../../services/assets';

function MovesCard ({ name }) {
  const [move, setMove] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  function changeMedia (mediaQueryList) {
    setDarkMode(mediaQueryList.matches);
  }

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', changeMedia);
    setDarkMode(mediaQueryList.matches);
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        const move = await getMove(name);
        setMove(move);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [name]);

  const types = importAssets(require.context('../../assets/images/types', false, /\.(webp)$/));
  const damages = importAssets(require.context('../../assets/images/damages', false, /\.(webp)$/));

  if (loading) {
    return (
      <div
        className='relative flex items-center justify-between p-3 m-3 overflow-hidden text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 xl:w-60'
      >
        <div className='inline-flex w-10 rounded-full'>
          <img src={spinner} alt='Loading' className='w-full animate-spin' />
        </div>
        <div
          className={`absolute h-20 translate-x-2 -translate-y-1/2 rounded-full z-1 left-2/4 top-1/2 w-50 ${darkMode ? 'bg-gray-900' : 'bg-default'}`}
        />
        <span className='z-0 w-3/4 text-lg font-black'>Loading ...</span>
      </div>
    );
  }

  if (move === null) {
    return (
      <div
        className='flex items-center justify-center p-3 m-3 border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 xl:w-60'
      >
        <span className='z-0 text-lg font-black text-center'>???</span>
      </div>
    );
  }

  return (
    <Link
      to={`/moves/${name}`}
      className='relative flex items-center justify-between p-3 m-3 overflow-hidden text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 xl:w-60'
    >
      <div className={`inline-flex w-10 p-2 rounded-full ${colorType(move.type.shortName)}`}>
        <img
          src={types[`${move.type.shortName}.webp`]}
          alt={move.type.fullName + ' type'}
          className='w-full'
        />
      </div>
      <img
        src={darkMode ? damages[`${move.damage.shortName}-dark.webp`] : damages[`${move.damage.shortName}.webp`]}
        alt={move.damage.fullName + ' damage'}
        className={`absolute h-20 translate-x-2 -translate-y-1/2 rounded-full z-1 left-2/4 top-1/2 w-50 ${darkMode ? 'bg-gray-900' : 'bg-default'} blur-xs`}
      />
      <span className='z-0 w-3/4 text-lg font-black'>{move.name}</span>
    </Link>
  );
}

export default MovesCard;
