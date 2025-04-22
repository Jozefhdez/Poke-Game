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

  const [health, setHealth] = useState([100, 100]);
  const [turn, setTurn] = useState(0);
  const [moves, setMoves] = useState([[], []]);

  useEffect(() => {
    const fetchMoves = async () => {
      if (selectedPokemones.length === 2) {
        const moves1 = selectedPokemones[0][0].moves.slice(0, 4);
        const moves2 = selectedPokemones[1][0].moves.slice(0, 4);
        setMoves([moves1, moves2]);
      }
    };
    fetchMoves();
  }, [selectedPokemones]);

  const handleAttack = () => {
    if (selectedPokemones.length === 2) {
      const attacker = turn;
      const defender = turn === 0 ? 1 : 0;

      const randomMoveIndex = Math.floor(Math.random() * moves[attacker].length);
      const randomMove = moves[attacker][randomMoveIndex];
      const damage = Math.floor(Math.random() * 20) + 10;

      const newHealth = [...health];
      newHealth[defender] -= damage;
      if (newHealth[defender] < 0) newHealth[defender] = 0;
      setHealth(newHealth);

      setTurn(defender);
    }
  };
  
  const resetGame = () => {
    setSelectedPokemones([]);
    setHealth([100, 100]);
    setTurn(0);
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
              <Screen pokemones={pokemones} hoverPokemon={hoverPokemon} selectedPokemones={selectedPokemones} health={health} resetGame={resetGame}/>
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
                <Actions handleAttack={handleAttack}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
