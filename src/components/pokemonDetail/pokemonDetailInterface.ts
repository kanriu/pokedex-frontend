import { PokemonFull } from "../../interfaces/pokemonInterfaces";

export interface PokemonDetailInterface extends PokemonFull {
  idContext: string;
  picture: string;
}
