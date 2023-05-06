import { createContext } from "react";
import { PokemonState } from "./PokemonProvider";

interface PokemonContextProps {
  id: string;
  picture: string;
  setPokemonIdWithPicture: (payload: PokemonState) => void;
}

export const PokemonContext = createContext({} as PokemonContextProps);
