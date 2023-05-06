import { memo, useEffect, useState } from "react";
import { PokemonDetailInterface } from "./pokemonDetailInterface";

export const PokemonDetail = memo(
  ({ idContext, picture, ...pokemon }: PokemonDetailInterface) => {
    const [sprites, setSprites] = useState<Array<string>>([]);
    useEffect(() => {
      let newArr: Array<string> = [];
      if (pokemon.sprites.other) {
        const dream_world = Object.values(
          pokemon.sprites.other.dream_world
        ).filter((item) => item !== null);
        const home = Object.values(pokemon.sprites.other.home).filter(
          (item) => item !== null
        );

        newArr = [...dream_world, ...home];
      }
      const filter = Object.values(pokemon.sprites).filter(
        (item) => item !== null && typeof item !== "object"
      );
      setSprites([...filter, ...newArr]);
    }, []);

    return (
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col-4 d-flex flex-column justify-content-center">
            <img
              src={picture}
              alt={pokemon.name}
              className="img-fluid animate__animated animate__fadeInLeft"
              loading="lazy"
            />
            <h3>{`#${idContext} ${pokemon.name}`}</h3>
          </div>

          <div className="col-8 d-flex flex-column justify-content-center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Types:</b> {pokemon.types.map((e) => e.type.name).join(", ")}
              </li>
              <li className="list-group-item">
                <b>Peso:</b> {pokemon.weight}kg
              </li>
              <li className="list-group-item">
                <b>Habilidades base:</b>
                {pokemon.abilities.map((e) => e.ability.name).join(", ")}
              </li>
              <li className="container list-group-item horizontal-scrollable">
                <b>Movimientos:</b>
                <div className="row text-center">
                  <span>
                    {pokemon.moves.map((e) => e.move.name).join(", ")}
                  </span>
                </div>
              </li>
              <li className="list-group-item">
                <b>Stats:</b>
                {pokemon.stats.map((item) => (
                  <div
                    key={item.stat.name}
                    className="d-flex justify-content-center"
                  >
                    <div className="fw-semibold col-2 text-start">
                      {item.stat.name}
                    </div>
                    <div className="col-1">{item.base_stat}</div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="container horizontal-scrollable">
            <h3 className="text-start ms-5">Sprites:</h3>
            <div className="row">
              {sprites.map((item) => (
                <div className="col-sm-3" key={item}>
                  <img
                    className="w-25 animate__animated animate__fadeIn"
                    style={{ height: "5rem" }}
                    src={item}
                    alt={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
