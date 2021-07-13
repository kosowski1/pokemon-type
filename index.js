import prompts from 'prompts';
import {pokemon} from './API/index';

async function searchPokemon () {
    const pok = await prompts({
      type: 'text',
      name: 'value',
      message: 'Which pokemon do you want to search?',
    });
    pokemon(pok.value);
  };
  searchPokemon();

