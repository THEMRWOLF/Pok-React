import React from 'react';
import { Link } from 'react-router-dom';
import spinner from '../../assets/images/spinner.webp';
import glitch from '../../assets/images/defaults/glitch.webp';
import unknown from '../../assets/images/defaults/unknown.webp';
import { getItem } from '../../services/pokeapi';

function ItemCard ({ name }) {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
        className='flex flex-col justify-between pb-3 m-3 text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 sm:w-5/12 lg:w-1/5'
      >
        <img src={spinner} alt='Loading' className='self-center w-40 h-40 my-11 animate-spin' />
        <span className='text-lg font-black'>Loading ...</span>
      </div>
    );
  }

  if (item === null) {
    return (
      <div
        className='flex flex-col justify-between pb-3 m-3 text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 sm:w-5/12 lg:w-1/5'
      >
        <img src={glitch} alt='Item glitch' className='self-center w-full h-40 my-11 animate-spin' />
        <span className='text-lg font-black'>???</span>
      </div>
    );
  }

  return (
    <Link
      to={`/items/${name}`}
      className='flex flex-col justify-between pb-3 m-3 text-center border-2 rounded-md w-72 shadow-center shadow-default dark:shadow-gray-900 dark:border-gray-800 dark:bg-gray-600 sm:w-5/12 lg:w-1/5'
    >
      <img src={item.image ?? unknown} alt={'Item ' + item.name} className='w-full h-auto my-1 pixelated drop-shadow-centerLight dark:drop-shadow-centerDark' />
      <span className='text-lg font-black'>{item.name}</span>
    </Link>
  );
}

export default ItemCard;
