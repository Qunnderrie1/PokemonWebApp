import { PokemonCard } from "../Component/PokemonCard";


export const type = ["Grass" , "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Electric" , "Psychic", "Fighting", "Rock", "Ground", "Ice", "Ghost"]

export const weakPokemon = ["Grass" , "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Electric" , "Psychic", "Fighting", "Rock", "Ground", "Ice", "Ghost"]




// Get All Pokemon Type
export function getAllPokemonTypes(list , prop){ 

    if(list) return [...new Set(list.map((item) => item[prop]))];
    else return [];
    
}

