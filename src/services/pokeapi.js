import Pokedex from 'pokedex-promise-v2';
import Pokemon from '../models/pokemon';
import Move from '../models/move';
import Item from '../models/item';

const pokedex = new Pokedex({ protocol: 'https' });

const basicTypes = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire',
  'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock',
  'steel', 'water'];

export async function getPokemon (idOrName) {
  try {
    const pokemonData = await pokedex.getPokemonByName(idOrName);

    const formName = pokemonData.forms[0].name;
    const form = await pokedex.getPokemonFormByName(formName);
    const species = await pokedex.getPokemonSpeciesByName(pokemonData.species.name);

    const id = species.pokedex_numbers.filter((id) => {
      return id.pokedex.name === 'national';
    })[0].entry_number;

    let name = 'Unknown pokémon';

    if (form.names.length !== 0) {
      name = form.names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;
    } else {
      name = species.names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;
    }

    const image = pokemonData.sprites.front_default;

    const description = species.flavor_text_entries.filter((description) => {
      return description.language.name === 'en';
    })[0].flavor_text;

    const types = [];

    for (let position = 0; position < pokemonData.types.length; position++) {
      const type = await pokedex.getTypeByName(pokemonData.types[position].type.name);

      let typeShortName = 'unknown';

      if (basicTypes.includes(type.name)) {
        typeShortName = type.name;
      }

      const typeFullName = type.names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;

      types.push({ shortName: typeShortName, fullName: typeFullName });
    }

    const stats = [];

    for (let position = 0; position < pokemonData.stats.length; position++) {
      const stat = await pokedex.getStatByName(pokemonData.stats[position].stat.name);
      const statName = stat.names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;
      const statBase = pokemonData.stats[position].base_stat;
      const statEffort = pokemonData.stats[position].effort;

      stats.push({ name: statName, base: statBase, effort: statEffort });
    }

    const abilities = [];

    for (let position = 0; position < pokemonData.abilities.length; position++) {
      const ability = await pokedex.getAbilityByName(pokemonData.abilities[position].ability.name);
      const abilityName = ability.names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;

      let abilityDescription = 'Unknown information.';

      if (ability.flavor_text_entries.length !== 0) {
        abilityDescription = ability.flavor_text_entries.filter((description) => {
          return description.language.name === 'en';
        })[0].flavor_text;
      }

      let abilityEffect = 'Unknown effect.';

      if (ability.effect_entries.length !== 0) {
        abilityEffect = ability.effect_entries.filter((effect) => {
          return effect.language.name === 'en';
        })[0].effect;
      }

      const abilityHidden = pokemonData.abilities[position].is_hidden;

      abilities.push({
        name: abilityName,
        description: abilityDescription,
        effect: abilityEffect,
        hidden: abilityHidden
      });
    }

    const pokemon = new Pokemon(id, name, image, description, types, stats, abilities);

    return pokemon;
  } catch (error) {
    console.log('Something happened fetching pokemon: ', error);
    return null;
  }
}

export async function getMove (idOrName) {
  try {
    const moveData = await pokedex.getMoveByName(idOrName);

    const id = moveData.id;
    const name = moveData.names.filter((name) => {
      return name.language.name === 'en';
    })[0].name;

    let description = 'Unknown information.';

    if (moveData.flavor_text_entries.length !== 0) {
      description = moveData.flavor_text_entries.filter((description) => {
        return description.language.name === 'en';
      })[0].flavor_text;
    }

    let effect = 'Unknown effect.';

    if (moveData.effect_entries.length !== 0) {
      effect = moveData.effect_entries.filter((effect) => {
        return effect.language.name === 'en';
      })[0].short_effect;
    }

    const type = await pokedex.getTypeByName(moveData.type.name);

    let typeShortName = 'unknown';

    if (basicTypes.includes(type.name)) {
      typeShortName = type.name;
    }

    const typeFullName = type.names.filter((name) => {
      return name.language.name === 'en';
    })[0].name;

    const damage = await pokedex.getMoveDamageClassByName(moveData.damage_class.name);
    const damageShortName = damage.name;
    const damageFullName = damage.names.filter((name) => {
      return name.language.name === 'en';
    })[0].name;

    let power = '--';

    if (moveData.power !== null) {
      power = moveData.power;
    }

    let accuracy = '--';

    if (moveData.accuracy !== null) {
      accuracy = moveData.accuracy;
    }

    let powerpoints = '--';

    if (moveData.pp !== null) {
      powerpoints = moveData.pp;
    }

    let priority = '--';

    if (moveData.priority !== null) {
      priority = moveData.priority;
    }

    const move = new Move(id, name, description, effect,
      { shortName: typeShortName, fullName: typeFullName },
      { shortName: damageShortName, fullName: damageFullName }, power, accuracy,
      powerpoints, priority);

    return move;
  } catch (error) {
    console.log('Something happened fetching move: ', error);
    return null;
  }
}

export async function getItem (idOrName) {
  try {
    const itemData = await pokedex.getItemByName(idOrName);

    const id = itemData.id;
    const name = itemData.names.filter((name) => {
      return name.language.name === 'en';
    })[0].name;

    const image = itemData.sprites.default;

    let description = 'Unknown information.';

    if (itemData.flavor_text_entries.length !== 0) {
      description = itemData.flavor_text_entries.filter((description) => {
        return description.language.name === 'en';
      })[0].text;
    }

    let effect = 'Uknown effect.';

    if (itemData.effect_entries.length !== 0) {
      effect = itemData.effect_entries.filter((effect) => {
        return effect.language.name === 'en';
      })[0].effect;
    }

    const category = await pokedex.getItemCategoryByName(itemData.category.name);
    const categoryName = category.names.filter((name) => {
      return name.language.name === 'en';
    })[0].name;

    const item = new Item(id, name, image, description, effect, categoryName);

    return item;
  } catch (error) {
    console.log('Something happened fetching item: ', error);
    return null;
  }
}

export async function getPokemonsNamesList () {
  try {
    const pokemonsListData = await pokedex.getPokemonsList();

    const pokemonsNamesList = [];

    for (let position = 0; position < pokemonsListData.count; position++) {
      const pokemonName = pokemonsListData.results[position].name;
      pokemonsNamesList.push(pokemonName); // Lazy loading
    }

    return pokemonsNamesList;
  } catch (error) {
    console.log('Something happened fetching pokemons names list: ', error);
    return null;
  }
}

export async function getMovesNamesList () {
  try {
    const movesListData = await pokedex.getMovesList();

    const movesNamesList = [];

    for (let position = 0; position < movesListData.count; position++) {
      const moveName = movesListData.results[position].name;
      movesNamesList.push(moveName);
    }

    return movesNamesList;
  } catch (error) {
    console.log('Something happened fetching moves names list: ', error);
    return null;
  }
}

export async function getItemsNamesList () {
  try {
    const itemsListData = await pokedex.getItemsList();

    const itemsNamesList = [];

    for (let position = 0; position < itemsListData.count; position++) {
      const itemName = itemsListData.results[position].name;
      itemsNamesList.push(itemName);
    }

    return itemsNamesList;
  } catch (error) {
    console.log('Something happened fetching items names list: ', error);
    return null;
  }
}

/* export async function searchPokemonsNames (search) {
  try {
    const pokemonsListData = await pokedex.getPokemonsList();
    const pokemonsMatchesNamesList = [];

    for (let position = 0; position < pokemonsListData.count; position++) {
      const species = await pokedex.getPokemonSpeciesByName(pokemonsListData.results[position].name);
      const speciesName = species.names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;

      if (speciesName.indexOf(search) >= 0) {
        const pokemonMatchesName = pokemonsListData.results[position].name;
        pokemonsMatchesNamesList.push(pokemonMatchesName);
      }
    }

    return pokemonsMatchesNamesList;
  } catch (error) {
    console.log('Something happened searching pokemons names: ', error);
    return null;
  }
}

export async function searchMovesNames (search) {
  try {
    const movesListData = await pokedex.getMovesList();
    const movesMatchesNamesList = [];

    for (let position = 0; position < movesListData.count; position++) {
      const name = movesListData.results[position].names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;

      if (name.indexOf(search) >= 0) {
        const moveMatchesName = movesListData.results[position].name;
        movesMatchesNamesList.push(moveMatchesName);
      }
    }

    return movesMatchesNamesList;
  } catch (error) {
    console.log('Something happened searching moves names: ', error);
    return null;
  }
}

export async function searchItemsNames (search) {
  try {
    const itemsListData = await pokedex.getItemsList();
    const itemsMatchesNamesList = [];

    for (let position = 0; position < itemsListData.count; position++) {
      const name = itemsListData.results[position].names.filter((name) => {
        return name.language.name === 'en';
      })[0].name;

      if (name.indexOf(search) >= 0) {
        const itemMatchesName = itemsListData.results[position].name;
        itemsMatchesNamesList.push(itemMatchesName);
      }
    }

    return itemsMatchesNamesList;
  } catch (error) {
    console.log('Something happened searching items names: ', error);
    return null;
  }
} */
