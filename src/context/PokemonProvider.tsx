import { useReducer } from "react";
import { PokemonContext } from "./PokemonContext";
import { pokemonReducer } from "./pokemonReducer";

export interface PokemonState {
  id: string;
  picture: string;
}

const INITIAL_STATE: PokemonState = {
  id: "",
  picture: "",
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PokemonProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);

  const setPokemonIdWithPicture = (payload: PokemonState) => {
    dispatch({ type: "setPokemonIdWithPicture", payload });
  };

  return (
    <PokemonContext.Provider value={{ ...state, setPokemonIdWithPicture }}>
      {children}
    </PokemonContext.Provider>
  );
};
