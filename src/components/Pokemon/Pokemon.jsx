import React from 'react';
import spinner from '../../assets/images/spinner.webp';
import missingno from '../../assets/images/defaults/missingno.webp';
import unknown from '../../assets/images/defaults/unknown.webp';
import { useParams } from 'react-router-dom';
import { importAssets, colorType } from '../../services/assets';
import { getPokemon } from '../../services/pokeapi';

function Pokemon () {
  const [pokemon, setPokemon] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { name } = useParams();

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
        className='flex items-center justify-center flex-grow w-full py-4 sm:px-11 max-w-7xl lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
      >
        <img src={spinner} alt='Loading' className='w-1/3 animate-spin' />
      </div>
    );
  }

  if (pokemon === null) {
    return (
      <div
        className='flex flex-col flex-wrap flex-grow w-full pt-4 pb-11 sm:px-11 max-w-7xl lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
      >
        <div className='flex flex-col flex-wrap justify-between sm:flex-row gap-y-3 sm:gap-y-0'>
          <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>#000 MissingNo</h1>
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
              className='w-10 h-auto p-2 duration-150 rounded-full top-3 bg-default shadow-center shadow-default hover:scale-110'
            >
              <img
                src={unknown}
                alt='Unknown type'
                className='w-full'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col my-3 mt-5 lg:flex-row justify-evenly gap-y-6 lg:h-96'>
          <img
            src={missingno}
            alt='Pokémon MissingNo'
            className='self-center block h-60 sm:h-96 sm:w-auto lg:h-full lg:max-w-full pixelated drop-shadow-centerLight dark:drop-shadow-centerDark'
          />

          <div
            className='self-center font-mono dark:text-white lg:border-2 lg:rounded-lg dark:bg-gray-600 lg:dark:border-gray-900 lg:shadow-center lg:shadow-default lg:dark:shadow-gray-900'
          >
            <table>
              <thead className='text-xs font-semibold sm:text-sm md:text-base lg:text-lg'>
                <tr className='tracking-wide text-left uppercase'>
                  <th className='px-4 py-3'>#</th>
                  <th className='px-4 py-3'>Base</th>
                  <th className='px-4 py-3'>Effort</th>
                </tr>
              </thead>
              <tbody className='text-xs sm:text-sm md:text-base lg:text-lg'>
                <tr className='font-semibold text-center'>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>
                    <div className='flex items-center'>
                      <span>HP</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                </tr>
                <tr className='font-semibold text-center'>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>
                    <div className='flex items-center'>
                      <span>Attack</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                </tr>
                <tr className='font-semibold text-center'>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>
                    <div className='flex items-center'>
                      <span>Special Attack</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                </tr>
                <tr className='font-semibold text-center'>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>
                    <div className='flex items-center'>
                      <span>Defense</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                </tr>
                <tr className='font-semibold text-center'>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>
                    <div className='flex items-center'>
                      <span>Special Defense</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                </tr>
                <tr className='font-semibold text-center'>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>
                    <div className='flex items-center'>
                      <span>Speed</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>???</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='px-3 mt-4 text-xs sm:text-sm md:text-base lg:text-lg'>
          <div className='pb-4 mb-4 border-b-2 dark:border-gray-900'>
            <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Description</h2>
            <p className='mt-4'>???</p>
          </div>
          <div className='flex flex-col gap-y-2'>
            <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Abilities</h2>
            <details className='pl-2 mt-3'>
              <summary className='text-sm font-black sm:text-base md:text-lg lg:text-xl'>???</summary>
              <p className='pl-5 mt-2'><strong>Summary: </strong>???</p>
              <p className='pl-5 mt-2'><strong>Effect: </strong>???</p>
            </details>
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
        <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>{`#${pokemon.id} ${pokemon.name}`}</h1>
        <div className='z-10 flex flex-row self-center mx-auto sm:m-0 gap-x-4'>
          {pokemon.types.map((type, key) => (
            <div
              key={key}
              className={`w-10 h-auto top-3 p-2 rounded-full ${colorType(type.shortName)} hover:scale-110 duration-150`}
            >
              <img
                src={types[`${type.shortName}.webp`]}
                alt={type.fullName + ' type'}
                className='w-full'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col my-3 mt-5 lg:flex-row justify-evenly gap-y-6'>
        <img
          src={pokemon.image ?? unknown}
          alt={`Pokémon ${pokemon.name}`}
          className='self-center block h-60 sm:h-96 sm:w-auto lg:h-96 lg:max-w-full pixelated drop-shadow-centerLight dark:drop-shadow-centerDark'
        />

        <div
          className='self-center font-mono dark:text-white lg:border-2 lg:rounded-lg dark:bg-gray-600 lg:dark:border-gray-900 lg:shadow-center lg:shadow-default lg:dark:shadow-gray-900'
        >
          <table>
            <thead className='text-xs font-semibold sm:text-sm md:text-base lg:text-lg'>
              <tr className='tracking-wide text-left uppercase'>
                <th className='px-4 py-3'>#</th>
                <th className='px-4 py-3'>Base</th>
                <th className='px-4 py-3'>Effort</th>
              </tr>
            </thead>
            <tbody className='text-xs sm:text-sm md:text-base lg:text-lg'>
              {pokemon.stats.map((stat, key) => (
                <tr className='font-semibold text-center' key={key}>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>
                    <div className='flex items-center'>
                      <span>{stat.name}</span>
                    </div>
                  </td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>{stat.base}</td>
                  <td className='px-4 py-3 border-t dark:border-gray-900'>{stat.effort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='px-3 mt-4 text-xs sm:text-sm md:text-base lg:text-lg'>
        <div className='pb-4 mb-4 border-b-2 dark:border-gray-900'>
          <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Description</h2>
          <p className='mt-4'>{pokemon.description}</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Abilities</h2>
          {pokemon.abilities.map((ability, key) => (
            <details key={key} className='pl-2 mt-3'>
              <summary className='text-sm font-black sm:text-base md:text-lg lg:text-xl'>{`${ability.name} ${ability.hidden ? '(Hidden)' : ''}`} </summary>
              <p className='pl-5 mt-2'><strong>Summary: </strong>{ability.description}</p>
              <p className='pl-5 mt-2'><strong>Effect: </strong>{ability.effect}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
