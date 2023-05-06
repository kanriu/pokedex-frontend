import { useNavigate } from "react-router-dom";
import { SimplePokemon } from "../../interfaces/pokemonInterfaces";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";

export const Pokemon = (pokemon: SimplePokemon) => {
  const { setPokemonIdWithPicture } = useContext(PokemonContext);
  const navigate = useNavigate();
  const onNavigate = (pokemon: SimplePokemon) => {
    navigate(`${pokemon.name}`);
    setPokemonIdWithPicture({ id: pokemon.id, picture: pokemon.picture });
  };
  return (
    <div key={pokemon.id} className="col animate__animated animate__fadeIn">
      <div className="card" role="button" onClick={() => onNavigate(pokemon)}>
        <div className="row no-gutters ">
          <div className="col-6">
            <img
              src={pokemon.picture}
              alt={pokemon.name}
              className="card-img"
              loading="lazy"
            />
          </div>
          <div className="col-6 text-black d-flex align-items-center">
            <div className="card-">
              <p>{`#${pokemon.id}`}</p>
              <h5 className="card-title">{pokemon.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
