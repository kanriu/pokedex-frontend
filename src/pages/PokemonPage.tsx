import { useState, useEffect } from "react";
import { usePokemonSearch } from "../hooks/usePokemonSearch";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
import { SearchInput } from "../components/searchInput";
import { Navbar } from "../components/navbar";
import { Loader } from "../components/loader";
import { Pokemon } from "../components/pokemon";

export const PokemonPage = () => {
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<Array<SimplePokemon>>(
    []
  );
  const [term, setTerm] = useState("");
  useEffect(() => {
    setPokemonFiltered(simplePokemonList);
  }, [simplePokemonList]);
  useEffect(() => {
    if (term.length === 0) return setPokemonFiltered(simplePokemonList);
    if (isNaN(Number(term)))
      return setPokemonFiltered(
        simplePokemonList.filter((item) =>
          item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      );
    const pokemonById = simplePokemonList.find((item) => item.id === term);
    setPokemonFiltered(pokemonById ? [pokemonById] : []);
  }, [term]);

  if (isFetching) {
    return <Loader />;
  }
  return (
    <>
      <Navbar>
        <SearchInput onDebounce={(value) => setTerm(value)} />
      </Navbar>
      <div className="row rows-cols-1 row-cols-md-4 g-4 mx-2 mt-5">
        {pokemonFiltered.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </>
  );
};
