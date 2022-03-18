import React from 'react';
import spinner from '../../assets/images/spinner.webp';
import unknown from '../../assets/images/defaults/unknown.webp';
import { useParams } from 'react-router-dom';
import { importAssets, colorType } from '../../services/assets';
import { getMove } from '../../services/pokeapi';

function Move () {
  const [move, setMove] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { name } = useParams();

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
        className='flex items-center justify-center flex-grow w-full py-4 sm:px-11 max-w-7xl lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
      >
        <img src={spinner} alt='Loading' className='w-1/3 animate-spin' />
      </div>
    );
  }

  if (move === null) {
    return (
      <div
        className='flex flex-col flex-wrap flex-grow w-full pt-4 pb-11 sm:px-11 max-w-7xl lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
      >
        <div className='flex flex-col flex-wrap justify-between sm:flex-row gap-y-3 sm:gap-y-0'>
          <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>#000 ???</h1>
          <div className='z-10 flex flex-row self-center mx-auto sm:m-0 gap-x-4'>
            <div
              className='w-10 h-auto p-2 duration-150 rounded-full top-3 bg-default shadow-center shadow-default hover:scale-110'
            >
              <img
                src={unknown}
                alt='Unknown type'
                className='w-full'
              />
            </div>
            <div
              className='flex justify-center w-10 h-auto p-2 duration-150 rounded-full top-3 bg-default shadow-center shadow-default hover:scale-110'
            >
              <img
                src={unknown}
                alt='Unknown damage'
                className='w-full my-auto'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col my-3 mt-5 lg:flex-row justify-evenly gap-y-6'>
          <div
            className='self-center font-mono dark:text-white lg:border-2 lg:rounded-lg dark:bg-gray-600 lg:dark:border-gray-900 lg:shadow-center lg:shadow-default lg:dark:shadow-gray-900'
          >
            <table>
              <thead className='text-xs font-semibold sm:text-sm md:text-base lg:text-lg'>
                <tr className='tracking-wide text-left uppercase'>
                  <th className='px-4 py-3'>PP</th>
                  <th className='px-4 py-3'>Power</th>
                  <th className='px-4 py-3'>Accuracy</th>
                  <th className='px-4 py-3'>Priority</th>
                </tr>
              </thead>
              <tbody className='text-xs sm:text-sm md:text-base lg:text-lg'>
                <tr className='font-semibold text-center'>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???%</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='px-3 mt-4 text-xs lg:w-1/2 sm:text-sm md:text-base lg:text-lg'>
            <div className='pb-4 mb-4 border-b-2 dark:border-gray-900'>
              <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Description</h2>
              <p className='mt-4'>???</p>
            </div>
            <div className='pb-4 mb-4'>
              <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Effect</h2>
              <p className='mt-4'>???</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className='flex flex-col flex-wrap flex-grow w-full pt-4 pb-11 sm:px-11 max-w-7xl lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
    >
      <div className='flex flex-col flex-wrap justify-between sm:flex-row gap-y-3 sm:gap-y-0'>
        <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>{`#${move.id} ${move.name}`}</h1>
        <div className='z-10 flex flex-row self-center mx-auto sm:m-0 gap-x-4'>
          <div
            className={`w-10 h-auto top-3 p-2 rounded-full ${colorType(move.type.shortName)} hover:scale-110 duration-150`}
          >
            <img
              src={types[`${move.type.shortName}.webp`]}
              alt={move.type.fullName + ' type'}
              className='w-full'
            />
          </div>
          <div
            className={`flex justify-center w-10 h-auto top-3 p-2 rounded-full ${colorType(move.type.shortName)} hover:scale-110 duration-150`}
          >
            <img
              src={damages[`${move.damage.shortName}.webp`]}
              alt={move.damage.fullName + ' damage'}
              className='w-full my-auto'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col my-3 mt-5 lg:flex-row justify-evenly gap-y-6'>
        <div
          className='self-center font-mono dark:text-white lg:border-2 lg:rounded-lg dark:bg-gray-600 lg:dark:border-gray-900 lg:shadow-center lg:shadow-default lg:dark:shadow-gray-900'
        >
          <table>
            <thead className='text-xs font-semibold sm:text-sm md:text-base lg:text-lg'>
              <tr className='tracking-wide text-left uppercase'>
                <th className='px-4 py-3'>PP</th>
                <th className='px-4 py-3'>Power</th>
                <th className='px-4 py-3'>Accuracy</th>
                <th className='px-4 py-3'>Priority</th>
              </tr>
            </thead>
            <tbody className='text-xs sm:text-sm md:text-base lg:text-lg'>
              <tr className='font-semibold text-center'>
                <td className='px-4 py-3 border-t dark:border-gray-900'>{move.powerpoints}</td>
                <td className='px-4 py-3 border-t dark:border-gray-900'>{move.power}</td>
                <td className='px-4 py-3 border-t dark:border-gray-900'>{move.accuracy !== '--' ? `${move.accuracy}%` : move.accuracy}</td>
                <td className='px-4 py-3 border-t dark:border-gray-900'>{move.priority}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='px-3 mt-4 text-xs lg:w-1/2 sm:text-sm md:text-base lg:text-lg'>
          <div className='pb-4 mb-4 border-b-2 dark:border-gray-900'>
            <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Description</h2>
            <p className='mt-4'>{move.description}</p>
          </div>
          <div className='pb-4 mb-4'>
            <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Effect</h2>
            <p className='mt-4'>{move.effect}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Move;
