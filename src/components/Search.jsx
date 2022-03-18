import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

function Search ({ func, place }) {
  const input = React.useRef(null);

  function handleClick (event, func) {
    if (event.key === 'Enter') {
      console.log(input.current.value);
    }
  }

  return (
    <div className='flex items-center justify-center w-full py-8'>
      <div className='relative w-full mx-auto bg-white border-2 rounded-md shadow-sm sm:w-4/6 lg:w-3/6 pr-7 drop-shadow-2xl dark:border-gray-800'>
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          <span className='text-gray-500 sm:text-sm'>
            <SearchIcon className='w-auto h-5 text-gray-500' />
          </span>
        </div>
        <input
          onKeyUp={handleClick}
          ref={input}
          type='text'
          name='name'
          id='name'
          className='block w-full px-4 py-2 rounded-md focus:outline-none sm:text-base md:text-lg lg:text-xl text-zinc-600'
          placeholder={place}
          autoComplete='off'
        />
      </div>
    </div>
  );
}

export default Search;
