import React from 'react';
import icon from '../assets/images/icon.webp';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Pokémons', href: '/pokemons' },
  { name: 'Moves', href: '/moves' },
  { name: 'Items', href: '/items' }
];

function Navbar () {
  return (
    <Disclosure as='nav' className='bg-red-600 dark:bg-gray-800'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto select-none max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-red-700 hover:dark:bg-gray-700'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (<XIcon className='block w-6 h-6' />) : (<MenuIcon className='block w-6 h-6' />)}
                </Disclosure.Button>
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <div className='flex items-center flex-shrink-0'>
                  <NavLink
                    to='/'
                  >
                    <img
                      src={icon}
                      alt='PokéReact icon'
                      className='block w-auto h-8'
                    />
                  </NavLink>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item, key) => (
                      <NavLink
                        key={key}
                        to={item.href}
                        className={(navData) => navData.isActive
                          ? 'text-white bg-red-700 dark:bg-gray-900 px-3 py-2 rounded-md font-bold sm:text-base md:text-lg lg:text-xl'
                          : 'text-gray-300 bg-red-600 dark:bg-gray-800 hover:bg-red-500 hover:dark:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-bold sm:text-base md:text-lg lg:text-xl'}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 items-center hidden pr-2 sm:flex'>
                  <NavLink
                    to='/about'
                    className={
                      (navData) => navData.isActive
                        ? 'text-white bg-red-700 dark:bg-gray-900 px-3 py-2 rounded-md font-bold sm:text-base md:text-lg lg:text-xl'
                        : 'text-gray-300 bg-red-600 dark:bg-gray-800 hover:bg-red-500 hover:dark:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-bold sm:text-base md:text-lg lg:text-xl'
                    }
                  >
                    About
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden sm:text-base md:text-lg lg:text-xl'>
            <div className='px-2 pt-2'>
              {navigation.map((item, key) => (
                <NavLink
                  key={key}
                  to={item.href}
                  className={
                    (navData) => navData.isActive
                      ? 'text-white bg-red-700 dark:bg-gray-900 block px-3 py-2 my-1 rounded-md text-base font-bold'
                      : 'text-gray-300 bg-red-600 dark:bg-gray-800 hover:bg-red-500 hover:dark:bg-gray-700 hover:text-white block px-3 py-2 my-1 rounded-md text-base font-bold'
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className='px-2 py-1'>
              <hr className='w-full border-red-500 dark:border-gray-600' />
            </div>
            <div className='px-2 pb-2'>
              <NavLink
                to='/about'
                className={
                  (navData) => navData.isActive
                    ? 'text-white bg-red-700 dark:bg-gray-900 block px-3 py-2 my-1 rounded-md text-base font-bold'
                    : 'text-gray-300 bg-red-600 dark:bg-gray-800 hover:bg-red-500 hover:dark:bg-gray-700 hover:text-white block px-3 py-2 my-1 rounded-md text-base font-bold'
                }
              >
                About
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
