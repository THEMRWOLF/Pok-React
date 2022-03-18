import React from 'react';
import spinner from '../../assets/images/spinner.webp';
import glitch from '../../assets/images/defaults/glitch.webp';
import unknown from '../../assets/images/defaults/unknown.webp';
import { useParams } from 'react-router-dom';
import { getItem } from '../../services/pokeapi';

function Item () {
  const [item, setItem] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { name } = useParams();

  React.useEffect(() => {
    (async () => {
      try {
        const item = await getItem(name);
        setItem(item);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [name]);

  if (loading) {
    return (
      <div
        className='flex items-center justify-center flex-grow w-full py-4 sm:px-11 max-w-7xl lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
      >
        <img src={spinner} alt='Loading' className='w-1/3 h-1/3 animate-spin' />
      </div>
    );
  }

  if (item === null) {
    return (
      <div
        className='flex flex-col flex-wrap flex-grow w-full pt-4 pb-11 sm:px-11 max-w-7xl lg:border-x-2 border-default lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
      >
        <div className='flex flex-col flex-wrap justify-between sm:flex-row gap-y-3 sm:gap-y-0'>
          <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>#000</h1>
          <span className='self-center text-sm text-center sm:text-base md:text-lg lg:text-xl'>???</span>
        </div>

        <div className='flex flex-col my-3 mt-5 lg:flex-row justify-evenly gap-y-6'>
          <img
            src={glitch}
            alt='Item glitch'
            className='self-center block h-60 sm:h-96 sm:w-auto lg:h-96 lg:max-w-full pixelated drop-shadow-centerLight dark:drop-shadow-centerDark'
          />
          <div className='self-center px-3 mt-4 text-xs sm:text-sm md:text-base lg:text-lg'>
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
      className='flex flex-col flex-wrap flex-grow w-full pt-4 pb-11 sm:px-11 max-w-7xl lg:border-x-2 border-default lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'
    >
      <div className='flex flex-col flex-wrap justify-between sm:flex-row gap-y-3 sm:gap-y-0'>
        <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>{`#${item.id} ${item.name}`}</h1>
        <span className='self-center text-sm text-center sm:text-base md:text-lg lg:text-xl'>{item.category}</span>
      </div>

      <div className='flex flex-col my-3 mt-5 lg:flex-row justify-evenly gap-y-6'>
        <img
          src={item.image ?? unknown}
          alt={`Item ${item.name} from category ${item.category}`}
          className='self-center block h-60 sm:h-96 sm:w-auto lg:h-96 lg:max-w-full pixelated drop-shadow-centerLight dark:drop-shadow-centerDark'
        />
        <div className='self-center px-3 mt-4 text-xs sm:text-sm md:text-base lg:text-lg'>
          <div className='pb-4 mb-4 border-b-2 dark:border-gray-900'>
            <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Description</h2>
            <p className='mt-4'>{item.description}</p>
          </div>
          <div className='pb-4 mb-4'>
            <h2 className='text-lg font-black sm:text-xl md:text-2xl lg:text-3xl'>Effect</h2>
            <p className='mt-4'>{item.effect}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
