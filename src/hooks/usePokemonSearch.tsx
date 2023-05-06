import { useState, useEffect } from "react";
import { pokemonApi } from "../api/pokemonApi";
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from "../interfaces/pokemonInterfaces";

export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  );
  const mapPokemonList = (response: Result[]) => {
    const newPokemonList: SimplePokemon[] = response.map(({ name, url }) => {
      const arr = url.split("/");
      const id = arr[arr.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {
        id,
        name,
        picture,
      };
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsFetching(false);
  };
  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(
      "https://pokeapi.co/api/v2/pokemon?limit=1280"
    );
    mapPokemonList(resp.data.results);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  // (async () => {
  //   const resp = await pokemonApi.get<PokemonPaginatedResponse>(
  //     "https://pokeapi.co/api/v2/pokemon?limit=1280"
  //   );
  //   mapPokemonList(resp.data.results);
  // })();
  return {
    isFetching,
    simplePokemonList,
    setSimplePokemonList,
  };
};
