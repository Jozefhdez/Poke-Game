import "./App.css";
import Pad from "./game/buttons/Pad";
import Screen from "./game/Screen";
import StartSelect from "./game/buttons/StartSelect";
import Actions from "./game/buttons/Actions";
import { useEffect, useState } from "react";

function App() {
  const [pokemones, setPokemons] = useState([]);
  const [hoverPokemon, setHoverPokemon] = useState(0);
  const [selectedPokemones, setSelectedPokemones] = useState([]);

  const Base_URL = "https://pokeapi.co/api/v2/";

  const getPokemons = async () => {
    const response = await fetch(Base_URL + 'pokemon?limit=102');
    const data = await response.json();
    console.log(data);
    const pokemonDetais = await getDetails(data.results);
    setPokemons(pokemonDetais);
  
  };

  const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map(el => el.json()));
    return data;
  }

  useEffect(() => {
    getPokemons();
  }, []);

  const handlePress = (dir) => {
    console.log(dir);
    let newHover = hoverPokemon;
  
    if (dir === 'right') {
      newHover += 1;
    }
    if (dir === 'left') {
      newHover -= 1;
    }
    if (dir === 'up') {
      newHover -= 3;
    }
    if (dir === 'down') {
      newHover += 3;
    }
  
    if (newHover >= 1) {
      setHoverPokemon(newHover);
    }
  };

  const handleSelectPokemon = () => {
    console.log('Select pokemon', hoverPokemon);
    const pokemonSelected = pokemones.filter((pokemon) => pokemon.id === hoverPokemon);

    const selections = [pokemonSelected, computerSelection()];
    setSelectedPokemones(selections)
    console.log(selections)
  };

  const computerSelection = () => {
    const randomId = Math.floor(Math.random() * pokemones.length);
    const selectElement = pokemones.filter((pokemon) => pokemon.id === randomId);

    return selectElement;
  };

  

  return (
    <>
      <div className="container-main">
        {/* Shadow */}
        <div className="shadow">
          {/* Container top */}
          <div className="container-top"></div>
          {/* Container game */}
          <div className="container-gameboy">
            {/* Container screen */}
            <div className="container-screen-center">
              <Screen pokemones={pokemones} hoverPokemon={hoverPokemon} selectedPokemones={selectedPokemones}/>
              {/* Container Nintendo */}
              <div className="container-name">Nintendo GAMEBOY</div>
            </div>
            {/* Container buttons */}
            <div className="container-buttons-center">
              <div className="container-buttons">
                {/* Directions pad */}
                <Pad handlePress={handlePress}/>
                {/*Select start*/}
                <StartSelect handleSelectPokemon={handleSelectPokemon}/>
                {/* A B */}
                <Actions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
