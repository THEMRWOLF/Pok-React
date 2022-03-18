# Credits

Here we give credit to every component we have used for the app.

## Development

These are the development components used by the app.

Their dependencies are named using their NPM package name.

### React

A JavaScript framework dedicated to frontend which is the base for the app.

Several dependencies are used for its integration:

* 'react':
    * Author: [Meta](https://opensource.fb.com/)
    * Description: The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.
    * License: MIT
    * Repository: https://github.com/facebook/react

* 'react-dom':
    * Author: [Meta](https://opensource.fb.com/)
    * Description: This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.
    * License: MIT
    * Repository: https://github.com/facebook/react (same as 'react' package)

* 'react-router-dom':
    * Author: [Meta](https://opensource.fb.com/)
    * Description: The react-router-dom package contains bindings for using React Router in web applications.
    * License: MIT
    * Repository: https://github.com/remix-run/react-router

* 'react-scripts':
    * Author: [Meta](https://opensource.fb.com/)
    * Description: This package includes scripts and configuration used by Create React App.
    * License: MIT
    * Repository: https://github.com/facebook/create-react-app

Other additional dependencies are also included:

* 'react-paginate':
    * Author: [AdeleD](https://github.com/AdeleD)
    * Description: A ReactJS component to render a pagination.
    * License: MIT
    * Repository: https://github.com/AdeleD/react-paginate

### TailwindCSS

A CSS framework which is used for styling the app UI.

Three main dependencies are included in the development side for its integration:

* 'tailwindcss':
    * Author: [Tailwind Labs](https://tailwindcss.com/)
    * Description: A utility-first CSS framework for rapidly building custom user interfaces.
    * License: MIT
    * Repository: https://github.com/tailwindlabs/tailwindcss

* 'postcss':
    * Author: [PostCSS](https://postcss.org/)
    * Description: PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
    * License: MIT
    * Repository: https://github.com/postcss/postcss

* 'autoprefixer':
    * Author: [PostCSS](https://postcss.org/)
    * Description: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use. It is recommended by Google and used in Twitter and Alibaba.
    * License: MIT
    * Repository: https://github.com/postcss/autoprefixer

Other additional dependencies are also included:

* '@headlessui/react':
    * Author: [Tailwind Labs](https://tailwindcss.com/)
    * Description: A set of completely unstyled, fully accessible UI components for React, designed to integrate beautifully with Tailwind CSS.
    * License: MIT
    * Repository: https://github.com/tailwindlabs/headlessui

* '@heroicons/react':
    * Author: [Tailwind Labs](https://tailwindcss.com/)
    * Description: General icons package.
    * License: MIT
    * Repository: https://github.com/tailwindlabs/heroicons

### PokéAPI

An API dedicated to the Pokémon series used as a backend for the app.

A main dependency is included for its integration:

* 'pokedex-promise-v2':
    * Author: [The PokéAPI project](https://pokeapi.co/)
    * Description: An easy way to use Pokéapi v2 with promises (or callbacks as of v3) in node.js
    * License: MIT
    * Repository: https://github.com/PokeAPI/pokedex-promise-v2

### StandardJS

A JavaScript-first linter which allows a project to follow general conventions while coding.

A main dependency is included in the development side for its integration:

* 'semistandard':
    * Author: [Standard JS](https://standardjs.com/)
    * Description: All the goodness of standard/standard with semicolons sprinkled on top.
    * License: MIT
    * Repository: https://github.com/standard/semistandard

### Other

These additional dependencies are used for deployment in a server and documentation

* 'serve':
    * Author: [Vercel](https://vercel.com/)
    * Description: Assuming you would like to serve a static site, single page application or just a static file (no matter if on your device or on the local network), this package is just the right choice for you.
    * License: MIT
    * Repository: https://github.com/vercel/serve

* 'dependency-cruiser':
    * Author: [sverweij (Sander Verweij)](https://github.com/sverweij)
    * Description: This runs through the dependencies in any JavaScript, TypeScript, LiveScript or CoffeeScript project and validates them against defined rules and reports the violated ones.
    * License: MIT
    * Repository: https://github.com/sverweij/dependency-cruiser

## Media

These are the media components used by the app.

### Icons

#### Logo and Spinner

These are the icons used for the app loco and the loading spinner.

The app uses a derivative version of other project:
* 'Poké Ball icon.svg':
    * Author: [Andreuvv](https://commons.wikimedia.org/wiki/User:Andreuvv)
    * License: Public Domain
    * File: https://commons.wikimedia.org/wiki/File:Pok%C3%A9_Ball_icon.svg

#### Types and Damages

These icons are found in the 'types' and 'damages' directories inside the 'assets' directory of the app source code location.

Their use is to show the type and damage of Pokémons and moves.

The app uses a derivative version of other project:

* SVG Icons for Pokemon Types:
    * Author: [duiker101 (Simone)](https://github.com/duiker101)
    * License: No license specified
    * Repository: https://github.com/duiker101/pokemon-type-svg-icons

### Sprites

#### Unknown

This is a icon found in the 'defaults' image directory inside the 'assets' directory of the app source code location.

Its use is to serve as a default image for Pokémons, Moves or Items without image.

The app uses a derivative version of other project:

* PokéAPI Sprites:
    * Author: [The PokéAPI project](https://pokeapi.co/)
    * License: CC0 1.0
    * Repository: https://github.com/PokeAPI/sprites


#### MissingNo and Glitch

These are icons found in the 'defaults' image directory inside the 'assets' directory of the app source code location.

Their use is to serve as default images for Pokémons and Items when an error ocurred loading their data.

The app uses derivative versions of other projects:

* 'MissingNo.(Kabu)Sprite.png' (MissingNo):
    * Author: [Captain Vas](https://pokemon.fandom.com/wiki/User:Captain_Vas)
    * License: No license specified
    * File: https://static.wikia.nocookie.net/pokemon/images/6/6e/MissingNo.%28Kabu%29Sprite.png/

* 'Missingno Sprite.png' (Glitch):
    * Author: [Captain Vas](https://pokemon.fandom.com/wiki/User:Captain_Vas)
    * License: No license specified
    * File: https://static.wikia.nocookie.net/pokemon/images/d/dc/Missingno_Sprite.png

## Services

These are the services components used by the app.

### PokéAPI

This is the API service from which the app obtains its data.

It is maintained by [The PokéAPI project](https://pokeapi.co/) and its endpoint is located at https://pokeapi.co/api/v2/.

## Inspirations

These are projects in which this app was inspired.

### PokéDex Angular App

This is a PWA (Progressive Web App) built using Angular by [HybridShivam (Shivam Baghel)](https://github.com/HybridShivam) whose repository is located at https://github.com/HybridShivam/pokedex-angular-app.

A hosted version of the application can be used through the author's main website at https://hybridshivam.com/pokedex/.

The app's repository README uses its disclaimer as a base.
