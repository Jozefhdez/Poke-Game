const Screen = ({pokemones, hoverPokemon, selectedPokemones}) => {
  
  console.log(hoverPokemon)
  
  return (
    <div className="container-screen">
      {/* Container top screen */}
      <div className="container-screen-title">
        <div className="container-dash-title1"></div>
        <div className="container-dash-title2"></div>
      </div>
      <div className="container-display">
        {selectedPokemones.length === 2 ? (
          <div>
              <div style={{display:"flex", justifyContent:"flex-end" }}>
                <div>
                <div class="health-bar-enemie"><div class="health-bar-fill-enemie"></div></div>
                <img src={selectedPokemones[1][0].sprites?.front_default} alt="imagen1"/>
                </div>
              </div>
              <div style={{ width:"315px", height:"50%" }}>
              <div>
              <div class="health-bar-user"><div class="health-bar-fill-user"></div></div>
                  <img src={selectedPokemones[0][0].sprites?.back_default} alt="imagen1"/>                  
                </div>
              </div>
            </div>
        ) : (
          <div className="container-pokedex">
          {pokemones?.map((pokemon) => (
        <div key={pokemon.id} className={`pokemon-card ${hoverPokemon === pokemon.id ? "hover-enabled" : ""}`} >
         <p className="pokemon-name">{pokemon.name}</p>
          <img key={pokemon.id} src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
        ))}
          </div>
        )}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Screen;
