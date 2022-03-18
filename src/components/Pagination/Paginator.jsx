import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Elements from './Elements';

export function Paginator ({ elements, elementsPerPage, CardsContainer, Card }) {
  // We start with an empty list of elements.
  const [currentElements, setCurrentElements] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use element offsets; we could also use page offsets
  // following the API or data you're working with.
  const [elementOffset, setElementOffset] = useState(0);

  useEffect(() => {
    // Fetch elements from another resources.
    const endOffset = elementOffset + elementsPerPage;
    setCurrentElements(elements.slice(elementOffset, endOffset));
    setPageCount(Math.ceil(elements.length / elementsPerPage));
  }, [elementOffset, elementsPerPage, elements]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * elementsPerPage) % elements.length;
    setElementOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-col flex-grow w-full h-full px-3 bg-white dark:bg-gray-700 max-w-7xl sm:px-6 lg:px-8'>
        <Elements currentElements={currentElements} CardsContainer={CardsContainer} Card={Card} />
      </div>
      {elements.length > elementsPerPage
        ? (
          <div className='flex items-center justify-between w-full px-4 py-3 mt-5 border-t border-red-500 dark:border-gray-600 max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex items-center justify-center flex-1'>
              <ReactPaginate
                containerClassName='relative inline-flex z-0 rounded-md flex-grow md:flex-grow-0 justify-between md:justify-center -space-x-px bg-white dark:bg-gray-700 md:bg-red-600 md:dark:bg-gray-600 text-white select-none font-semibold md:shadow-center md:shadow-default md:dark:shadow-gray-900'
                pageClassName='inline-flex border dark:border-gray-900 hidden md:block text-xs font-semibold sm:text-sm md:text-base lg:text-lg hover:bg-red-500 hover:dark:bg-gray-500'
                pageLinkClassName='h-full align-middle inline-flex px-2 py-1 items-center sm:px-4 sm:py-2'
                activeClassName='z-10 border dark:border-gray-900 hidden md:block text-xs font-semibold sm:text-sm md:text-base lg:text-lg bg-white md:bg-red-700 md:dark:bg-gray-700'
                disabledClassName='hover:bg-red-600 hover:dark:bg-gray-600'
                disabledLinkClassName='cursor-not-allowed'
                previousLabel='&#x25C0;'
                previousClassName='inline-flex rounded-md md:rounded-r-none md:rounded-l-md border dark:border-gray-900 text-2xl bg-red-600 dark:bg-gray-600 font-semibold sm:text-lg md:text-xl lg:text-2xl hover:bg-red-500 hover:dark:bg-gray-500 '
                previousLinkClassName='h-full align-middle inline-flex px-4 md:px-2 py-1 items-center sm:px-4 sm:py-2 shadow-center shadow-default dark:shadow-gray-900 md:shadow-transparent'
                breakLabel='.'
                breakClassName='inline-flex border dark:border-gray-900 hidden md:block text-base font-semibold sm:text-lg md:text-xl lg:text-2xl'
                breakLinkClassName='inline-flex px-2 py-1 items-center sm:px-4 sm:py-2'
                nextLabel='&#x25B6;'
                nextClassName='inline-flex rounded-md md:rounded-l-none md:rounded-r-md border dark:border-gray-900 text-2xl bg-red-600 dark:bg-gray-600 font-semibold sm:text-lg md:text-xl lg:text-2xl hover:bg-red-500 hover:dark:bg-gray-500'
                nextLinkClassName='h-full align-middle inline-flex px-4 md:px-2 py-1 items-center sm:px-4 sm:py-2 shadow-center shadow-default dark:shadow-gray-900 md:shadow-transparent'
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
          )
        : (
            ''
          )}
    </>
  );
}
