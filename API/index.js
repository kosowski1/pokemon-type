import axios from 'axios';

/**
 * 
 * const pokemon recebe o nome do pokemon digitado via console;
 * axios realiza o get na pokeapi, e retorna o objeto;
 * então é realizado um map dentro de types, para recuperar a informação do tipo do pokemon, chamando a função types para printar as vantagens e desvantagens de acordo com os
 * tipos de pokemons.
 */

const pokemon = (pok) =>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pok}`)
    .then((response) => {
    const { data } = response;
    const type = data.types;
    var mapPok = type.map(function(item, indice){
        return types(item.type.name, pok);
    })

    })
  .catch((err) => {
    console.error(`Pokemon not Found! error ${err.response.status}`)
  });
}
const types = (type, pokemon) => {
    axios
    .get(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => {
    const { data } = response;
    console.log(`${pokemon} is a ${type} type and deals double damage on:`)
    var doubleDamageTo = data.damage_relations.double_damage_to.map(function(item, indice){
        return console.log(item.name);
    })
    console.log(`${pokemon} is a ${type} type and takes double damage from:`)
    var doubleDamageFrom = data.damage_relations.double_damage_from.map(function(item, indice){
        return console.log(item.name);
    })
    })
  .catch((err) => {
    throw err;
  });
}
export {pokemon};
