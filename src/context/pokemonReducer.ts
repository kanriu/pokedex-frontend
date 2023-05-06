import { PokemonState } from "./PokemonProvider";

type PokemonAction = {
  type: "setPokemonIdWithPicture";
  payload: PokemonState;
};

export const pokemonReducer = (
  state: PokemonState,
  action: PokemonAction
): PokemonState => {
  switch (action.type) {
    case "setPokemonIdWithPicture":
      return {
        ...state,
        id: action.payload.id,
        picture: action.payload.picture,
      };
    default:
      return state;
  }
};
