import React from 'react';

function CardsContainer ({ children }) {
  return (
    <div className='flex flex-wrap justify-around mt-4 gap-y-6'>
      {children}
    </div>
  );
}

export default CardsContainer;
