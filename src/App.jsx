import "./App.css";
import Pad from "./game/buttons/Pad";
import Screen from "./game/Screen";
import StartSelect from "./game/buttons/StartSelect";
import Actions from "./game/buttons/Actions";
import { useEffect, useState } from "react";

function App() {
  const [pokemones, setPokemons] = useState([]);

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
    console.log(dir)
  }

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
              <Screen pokemones={pokemones}/>
              {/* Container Nintendo */}
              <div className="container-name">Nintendo GAMEBOY</div>
            </div>
            {/* Container buttons */}
            <div className="container-buttons-center">
              <div className="container-buttons">
                {/* Directions pad */}
                <Pad handlePress={handlePress}/>
                {/*Select start*/}
                <StartSelect />
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
