import React from 'react';
import spinner from '../../assets/images/spinner.webp';
// import Search from '../Search';
import { Paginator } from '../Pagination/Paginator';
import CardsContainer from '../CardsContainer';
import ItemCard from './ItemCard';
import Error from '../Generic/Error';
import { getItemsNamesList /* searchItemsNames */ } from '../../services/pokeapi';

function ItemsList () {
  const [itemsNames, setItemsNames] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function fecthItemsNames () {
    const itemlist = await getItemsNamesList();
    return itemlist;
  }

  React.useEffect(() => {
    (async () => {
      try {
        const itemsNames = await fecthItemsNames();
        setItemsNames(itemsNames);
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

  if (itemsNames === null) {
    return (
      <Error number='500' text='Internal server error' />
    );
  }

  return (
    <>
      {/* <Search func={searchItemsNames} place='Poké Ball' /> */}
      <Paginator elements={itemsNames} elementsPerPage={8} CardsContainer={CardsContainer} Card={ItemCard} />
    </>
  );
}

export default ItemsList;
