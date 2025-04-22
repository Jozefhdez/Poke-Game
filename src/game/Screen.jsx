import { useState, useEffect } from "react";

const Screen = ({ pokemones, hoverPokemon, selectedPokemones, health, resetGame }) => {
  const getHealthColor = (health) => {
    if (health > 50) return "green";
    if (health > 20) return "yellow";
    return "red";
  };

  return (
    <div className="container-screen">
      {/* Container top screen */}
      <div className="container-screen-title">
        <div className="container-dash-title1"></div>
        <div className="container-dash-title2"></div>
      </div>
      <div className="container-display">
        {selectedPokemones.length === 2 ? (
          health[0] === 0 || health[1] === 0 ? (
            <div className="winner-message">
              <p>  {health[0] === 0 ? `${selectedPokemones[1][0].name} ha ganado!`: `${selectedPokemones[0][0].name} ha ganado!`}</p>
              <button onClick={resetGame} className="button-reset">Reiniciar</button>
            </div>
          ) : (
            <div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div>
                  <div className="health-bar">
                    <div
                      style={{
                        width: `${health[1]}%`,
                        backgroundColor: getHealthColor(health[1]),
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    ></div>
                  </div>
                  <img
                    src={selectedPokemones[1][0].sprites?.front_default}
                    alt="imagen1"
                  />
                </div>
              </div>
              <div style={{ width: "315px", height: "50%" }}>
                <div>
                  <div className="health-bar">
                    <div
                      style={{
                        width: `${health[0]}%`,
                        backgroundColor: getHealthColor(health[0]),
                        height: "100%",
                        borderRadius: "10px",
                      }}
                    ></div>
                  </div>
                  <img
                    src={selectedPokemones[0][0].sprites?.back_default}
                    alt="imagen1"
                  />
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="container-pokedex">
            {pokemones?.map((pokemon) => (
              <div
                key={pokemon.id}
                className={`pokemon-card ${
                  hoverPokemon === pokemon.id ? "hover-enabled" : ""
                }`}
              >
                <p className="pokemon-name">{pokemon.name}</p>
                <img
                  key={pokemon.id}
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
              </div>
            ))}
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Screen;