import React from 'react';
import ContentBox from '../ContentBox';

function Error ({ number = 404, text = 'Page not found' }) {
  return (
    <ContentBox>
      <div className='flex flex-col justify-center flex-grow gap-y-2'>
        <span className='text-lg text-center sm:text-xl md:text-2xl lg:text-3xl'>Error</span>
        <span className='text-5xl text-center sm:text-6xl md:text-7xl lg:text-8xl'>{number}</span>
        <span className='text-sm text-center sm:text-base md:text-lg lg:text-xl'>{text}</span>
      </div>
    </ContentBox>
  );
}

export default Error;
