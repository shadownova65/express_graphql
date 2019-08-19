import axios from 'axios';
import {IPokemon} from '../../interfaces';


const addPokemon = ({userId} : {userId: string}): string => {
  return userId
} 

const getPokemons = async () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon/').then(response => {
    console.log('get pokemons back from api', response.data.results);
    return response.data.results.map((pokemon: any) => {
      let name = pokemon.name
      console.log(name);
      return getDetail({name});
    })
  })
}

const getDetail = async ({name} : {name: string}) => {
    console.log(`try to get ${name} detail`);
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    console.log(`get detail back`);
    let abilities = response.data.abilities.map((ability: any) => (ability.ability.name));
    let base_exp = response.data.base_experience;
    let height = response.data.height;
    let weight = response.data.weight;
    let name = response.data.name;
    let avatar = response.data.sprites.front_default;
    let types = response.data.types.map((type: any) => (type.type.name));
    console.log(name);
    console.log('base_exp: ', base_exp);
    console.log('abilities: ', abilities);
    console.log('height: ', height);
    console.log('weight: ', weight);
    console.log('avatar: ', avatar);
    console.log('types: ', types);
    
    return {
      name,
      abilities,
      base_exp,
      height,
      weight,
      avatar,
      types
    }
  }) 
}

export default {
  addPokemon,
  getPokemons,
  getDetail
}