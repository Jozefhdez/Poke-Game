const Screen = ({pokemones, hoverPokemon}) => {
  
  console.log(hoverPokemon)
  
  return (
    <div className="container-screen">
      {/* Container top screen */}
      <div className="container-screen-title">
        <div className="container-dash-title1"></div>
        <div className="container-dash-title2"></div>
      </div>
      <div className="container-display">
      {pokemones?.map((pokemon) => (
        <div key={pokemon.id} className={`pokemon-card ${hoverPokemon === pokemon.id ? "hover-enabled" : ""}`}>
         <p className="pokemon-name">{pokemon.name}</p>
          <img key={pokemon.id} src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Screen;
