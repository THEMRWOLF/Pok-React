import React from 'react';

function ContentBox ({ children }) {
  return (
    <div className='flex flex-col items-center justify-between flex-grow w-full bg-white sm:px-8 dark:bg-gray-700 dark:text-white'>
      {/* <div className='flex flex-col flex-grow w-full h-full px-10 bg-white dark:bg-gray-700 max-w-7xl sm:px-6 lg:px-8'> */}
      {children}
      {/* </div> */}
    </div>
  );
}

export default ContentBox;
