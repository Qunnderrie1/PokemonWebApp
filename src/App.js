import { useEffect, useState } from 'react';
import './App.css';
import { PokemonCard } from './Component/PokemonCard';
import { type  , getAllPokemonTypes,  } from './Helper/helper.js'


function App() {

  const [pokemon , setPokemon] = useState([])
  const [pokemonType , setPokemonType] = useState('');
  const [userSearchPokemon , setUserSearchPokemon] = useState([])
  const [pokemonWeakness, setPokemonWeakness] = useState('');


 function getPokemon(){

  fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
  .then((res) => res.json())
  .then((pokemon) => setPokemon(pokemon))
  .catch((err) => console.log(err))

  }

  useEffect(getPokemon,[])




  function onSubmit(e){
    e.preventDefault();
  }



  let poke = getAllPokemonTypes(pokemon.pokemon , 'type');



  const pokemonHandler = () => {

    const newData = 
    pokemon.pokemon
    .filter(item => item.type.filter(item => item == (pokemonType == undefined ? item.type : pokemonType)) == pokemonType)
    .filter(item => item.weaknesses.filter((item) => item == (pokemonWeakness == '' ? item.type : pokemonWeakness)) == pokemonWeakness) 

    if(pokemonType){
      pokemon.pokemon 
      .filter(item => item.type.filter(item => item == (pokemonType == undefined ? item.type : pokemonType)) == pokemonType)

    }
    if(pokemonWeakness){
      pokemon.pokemon 
      .filter(item => item.weaknesses.filter((item) => item == (pokemonWeakness == '' ? item.type : pokemonWeakness)) == pokemonWeakness) 
    }

    setUserSearchPokemon(newData)

  }

  const clearHandler = () =>{

    userSearchPokemon.length = 0;

    if(userSearchPokemon.length == 0){
      setPokemonType('')
      setPokemonWeakness('')

    }


  }



  return (
    <div className="App container">
      <h1 className='appTitle'>POKEMON</h1>
      <form onSubmit={onSubmit} >
         {/* // Pokemon Name */}
      <label htmlFor='Name'>Filter By Type</label>
        <select value={pokemonType} onChange={(e) => setPokemonType(e.target.value)} className='form-select'>
          <option value={poke}>Select</option>
          {
            type.map((item , index) =>{
              return <option  key={index} value={item}>{item}</option>
            })
          }
        </select>

        <label htmlFor='Name'>Filter By Weakness</label>
        <select value={pokemonWeakness} onChange={(e) => setPokemonWeakness(e.target.value)} className='form-select'>
          <option value={poke}>Select</option>
          {
            type.map((item , index) =>{
              return <option key={index} value={item}>{item}</option>
            })
          }
        </select>


      <button onClick={() => pokemonHandler()}  className='btn btn-primary' type="submit">Search</button>
      <button onClick={() => clearHandler()} className='clearBtn btn btn-primary'>Reset</button>
      </form>

     {
      userSearchPokemon.length > 0 ?
      <h3>{`We Found ${userSearchPokemon.length} Pokemons.`}</h3> :
      <h3>No Data</h3>
     } 

      <ul> 
        {
          
        userSearchPokemon ? userSearchPokemon.map((item) => {
           return <li key={item.id}>
              <PokemonCard
               name={item.name}
               img={item.img}
                 num={item.num}
                  weakness={item.weaknesses}
                  type={item.type}  />
            </li> 
          }) : pokemon.pokemon.map((item) => {
            return <li key={item.id}>
              <PokemonCard
              name={item.name}
              img={item.img}
                num={item.num}
                 weakness={item.weaknesses}
                 type={item.type}  />
              </li>
          })
        } 
      </ul>
    </div>
  );
}

export default App;