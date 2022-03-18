import React from 'react';

function About () {
  return (
    <div className='flex flex-col flex-wrap flex-grow px-4 pt-4 pb-11 w-full max-w-3xl sm:px-11 lg:border-x-2 lg:dark:border-gray-900 lg:shadow-vertical lg:shadow-default lg:dark:shadow-gray-900'>
      <h1 className='text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl'>About</h1>

      <div className='flex flex-col gap-y-4 my-5 text-xs sm:text-sm md:text-base lg:text-lg'>
        <h2 className='mt-10 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl'>License</h2>
        <p>This program is free software: you can redistribute it and/or modify it under the terms of the <a className='underline' target='_blank' rel='noreferrer' href='https://www.gnu.org/licenses/agpl-3.0.html'>GNU Affero General Public License</a> as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.</p>
        <h2 className='mt-10 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl'>Authors</h2>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>Echedey López Romero</summary>
          <p className='pl-5 mt-2'><a className='underline' target='_blank' rel='noreferrer' href='https://codeberg.org/EchedeyLR'>Codeberg</a></p>
          <p className='pl-5 mt-2'><a className='underline' target='_blank' rel='noreferrer' href='https://notabug.org/EchedeyLR'>NotABug</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>Tomás Navarro Cabrera</summary>
          <p className='pl-5 mt-2'><a className='underline' target='_blank' rel='noreferrer' href='https://codeberg.org/Tomy'>Codeberg</a></p>
          <p className='pl-5 mt-2'><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/THEMRWOLF'>GitHub</a></p>
        </details>

        <h2 className='mt-10 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl'>Credits</h2>
        <p>Here we give credit to every component we have used for the app.</p>
        <h3 className='mt-10 text-base font-semibold sm:font-normal sm:text-lg md:text-xl lg:text-2xl'>Development</h3>
        <p>These are the development components used by the app.</p>
        <p>Their dependencies are named using their NPM package name.</p>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>React</h4>
        <p>A JavaScript framework dedicated to frontend which is the base for the app.</p>
        <p>Several dependencies are used for its integration:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;react&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://opensource.fb.com/'>Meta</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/facebook/react'>https://github.com/facebook/react</a> (same as &#39;react&#39; package)</p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;react-dom&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://opensource.fb.com/'>Meta</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/facebook/react'>https://github.com/facebook/react</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;react-router-dom&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://opensource.fb.com/'>Meta</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>The react-router-dom package contains bindings for using React Router in web applications.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/remix-run/react-router'>https://github.com/remix-run/react-router</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;react-scripts&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://opensource.fb.com/'>Meta</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>This package includes scripts and configuration used by Create React App.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/facebook/create-react-app'>https://github.com/facebook/create-react-app</a></p>
        </details>

        <p className='mt-5'>Other additional dependencies are also included:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;react-paginate&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/AdeleD'>AdeleD</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>A ReactJS component to render a pagination.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/AdeleD/react-paginate'>https://github.com/AdeleD/react-paginate</a></p>
        </details>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>TailwindCSS</h4>
        <p>A CSS framework which is used for styling the app UI.</p>
        <p>Three main dependencies are included in the development side for its integration:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;tailwindcss&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://tailwindcss.com/'>Tailwind Labs</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>A utility-first CSS framework for rapidly building custom user interfaces.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/tailwindlabs/tailwindcss'>https://github.com/tailwindlabs/tailwindcss</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;postcss&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://postcss.org/'>PostCSS</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/postcss/postcss'>https://github.com/postcss/postcss</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;autoprefixer&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://postcss.org/'>PostCSS</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/postcss/autoprefixer'>https://github.com/postcss/autoprefixer</a></p>
        </details>

        <p className='mt-5'>Other additional dependencies are also included:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;@headlessui/react&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://tailwindcss.com/'>Tailwind Labs</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>A set of completely unstyled, fully accessible UI components for React, designed to integrate beautifully with Tailwind CSS.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/tailwindlabs/headlessui'>https://github.com/tailwindlabs/headlessui</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;@heroicons/react&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://tailwindcss.com/'>Tailwind Labs</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>General icons package.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/tailwindlabs/heroicons'>https://github.com/tailwindlabs/heroicons</a></p>
        </details>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>PokéAPI</h4>
        <p>An API dedicated to the Pokémon series used as a backend for the app.</p>
        <p>A main dependency is included for its integration:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;pokedex-promise-v2&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://pokeapi.co/'>The PokéAPI project</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>An easy way to use Pokéapi v2 with promises (or callbacks as of v3) in node.js</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/PokeAPI/pokedex-promise-v2'>https://github.com/PokeAPI/pokedex-promise-v2</a></p>
        </details>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>StandardJS</h4>
        <p>A JavaScript-first linter which allows a project to follow general conventions while coding.</p>
        <p>A main dependency is included in the development side for its integration:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;semistandard&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://standardjs.com/'>Standard JS</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>All the goodness of standard/standard with semicolons sprinkled on top.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/standard/semistandard'>https://github.com/standard/semistandard</a></p>
        </details>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>Other</h4>
        <p>These additional dependencies are used for deployment in a server and documentation.</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;serve&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://vercel.com/'>Vercel</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>Assuming you would like to serve a static site, single page application or just a static file (no matter if on your device or on the local network), this package is just the right choice for you.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/vercel/serve'>https://github.com/vercel/serve</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;dependency-cruiser&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/sverweij'>sverweij (Sander Verweij)</a></p>
          <p className='pl-5 mt-2'><strong>Description: </strong>This runs through the dependencies in any JavaScript, TypeScript, LiveScript or CoffeeScript project and validates them against defined rules and reports the violated ones.</p>
          <p className='pl-5 mt-2'><strong>License: </strong>MIT</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/sverweij/dependency-cruiser'>https://github.com/sverweij/dependency-cruiser</a></p>
        </details>

        <h3 className='mt-10 text-base font-semibold sm:font-normal sm:text-lg md:text-xl lg:text-2xl'>Media</h3>
        <p>These are the media components used by the app.</p>
        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>Logo and Spinner</h4>
        <p> These are the icons used for the app loco and the loading spinner.</p>
        <p>The app uses a derivative version of other project:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;Poké Ball icon.svg&#39;</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://commons.wikimedia.org/wiki/User:Andreuvv'>Andreuvv</a></p>
          <p className='pl-5 mt-2'><strong>License: </strong>Public Domain</p>
          <p className='pl-5 mt-2'><strong>File: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://commons.wikimedia.org/wiki/File:Pok%C3%A9_Ball_icon.svg'>https://commons.wikimedia.org/wiki/File:Pok%C3%A9_Ball_icon.svg</a></p>
        </details>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>Types and Damages</h4>
        <p> These icons are found in the &#39; types &#39; and &#39; damages &#39; directories inside the &#39; assets &#39; directory of the app source code location.</p>
        <p>Their use is to show the type and damage of Pokémons and moves.</p>
        <p>The app uses a derivative version of other project:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>SVG Icons for Pokemon Types</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/duiker101'>duiker101 (Simone)</a></p>
          <p className='pl-5 mt-2'><strong>License: </strong>No license specified</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/duiker101/pokemon-type-svg-icons'>https://github.com/duiker101/pokemon-type-svg-icons</a></p>
        </details>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>Unknown</h4>
        <p>This is a icon found in the &#39;defaults&#39; image directory inside the &#39;assets&#39; directory of the app source code location.</p>
        <p>Its use is to serve as a default image for Pokémons, Moves or Items without image.</p>
        <p>The app uses a derivative version of other project:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>PokéAPI Sprites</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://pokeapi.co/'>The PokéAPI project</a></p>
          <p className='pl-5 mt-2'><strong>License: </strong>CC0 1.0</p>
          <p className='pl-5 mt-2'><strong>Repository: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://github.com/PokeAPI/sprites'>https://github.com/PokeAPI/sprites</a></p>
        </details>

        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>MissingNo and Glitch</h4>
        <p> These are icons found in the &#39; defaults &#39; image directory inside the &#39; assets &#39; directory of the app source code location.</p>
        <p>Their use is to serve as default images for Pokémons and Items when an error ocurred loading their data.</p>
        <p>The app uses derivative versions of other projects:</p>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;MissingNo.(Kabu)Sprite.png&#39; (MissingNo)</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://pokemon.fandom.com/wiki/User:Captain_Vas'>Captain Vas</a></p>
          <p className='pl-5 mt-2'><strong>License: </strong>No license specified</p>
          <p className='pl-5 mt-2'><strong>File: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://static.wikia.nocookie.net/pokemon/images/6/6e/MissingNo.%28Kabu%29Sprite.png/'>https://static.wikia.nocookie.net/pokemon/images/6/6e/MissingNo.%28Kabu%29Sprite.png/</a></p>
        </details>
        <details className='pl-2 mt-3'>
          <summary className='text-sm md:text-base lg:text-lg'>&#39;Missingno Sprite.png&#39; (Glitch)</summary>
          <p className='pl-5 mt-2'><strong>Author: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://pokemon.fandom.com/wiki/User:Captain_Vas'>Captain Vas</a></p>
          <p className='pl-5 mt-2'><strong>License: </strong>No license specified</p>
          <p className='pl-5 mt-2'><strong>File: </strong><a className='underline' target='_blank' rel='noreferrer' href='https://static.wikia.nocookie.net/pokemon/images/d/dc/Missingno_Sprite.png'>https://static.wikia.nocookie.net/pokemon/images/d/dc/Missingno_Sprite.png</a></p>
        </details>

        <h3 className='mt-10 text-base font-semibold sm:font-normal sm:text-lg md:text-xl lg:text-2xl'>Services</h3>
        <p>These are the services components used by the app.</p>
        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>PokéAPI</h4>
        <p> This is the API service from which the app obtains its data.</p>
        <p>It is maintained by <a className='underline' target='_blank' rel='noreferrer' href='https://pokeapi.co/'>The PokéAPI project</a> and its endpoint is located at <a className='underline' target='_blank' rel='noreferrer' href='https://pokeapi.co/api/v2/'>https://pokeapi.co/api/v2/</a>.</p>
        <h3 className='mt-10 text-base font-semibold sm:font-normal sm:text-lg md:text-xl lg:text-2xl'>Inspirations</h3>
        <p>These are projects in which this app was inspired.</p>
        <h4 className='mt-5 text-sm font-semibold sm:font-normal sm:text-base md:text-lg lg:text-xl'>PokéDex Angular App</h4>
        <p> This is a PWA (Progressive Web App) built using Angular by <a className='underline' target='_blank' rel='noreferrer' href='https://github.com/HybridShivam'> HybridShivam(Shivam Baghel)</a> whose repository is located at <a className='underline' target='_blank' rel='noreferrer' href='https://github.com/HybridShivam/pokedex-angular-app'> https://github.com/HybridShivam/pokedex-angular-app</a>.</p>
        <p>A hosted version of the application can be used through the author&#39;s main website at <a className='underline' target='_blank' rel='noreferrer' href='https://hybridshivam.com/pokedex/'>https://hybridshivam.com/pokedex/</a>.</p>
        <p>The app&#39;s repository README uses its disclaimer as a base.</p>

        <h2 className='mt-10 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl'>Disclaimer</h2>
        <p>This is an unofficial, educational app and IS NOT affiliated, endorsed or supported by Nintendo, Game Freak and The Pokémon Company in any way.</p>
        <p>No copyright infringement intended.</p>
      </div>
    </div>
  );
}

export default About;
