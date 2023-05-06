import { useNavigate } from "react-router-dom";
import { Loader } from "../components/loader";
import { Navbar } from "../components/navbar";
import { PokemonDetail } from "../components/pokemonDetail/indext";
import { usePokemon } from "../hooks/usePokemon";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const DetailsPage = () => {
  const navigate = useNavigate();
  const { id, picture } = useContext(PokemonContext);
  if (!id) navigate("/");
  const { isLoading, pokemon } = usePokemon(id || "");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container p-0">
      <Navbar />
      <PokemonDetail idContext={id} picture={picture} {...pokemon} />
    </div>
  );
};
