import { Reducer } from "@reduxjs/toolkit";
import { FavoritosAction } from "../actions/favoritosActions";
import Personaje from "../types/personaje";

export interface FavoritosState {
  favoritos: Personaje[] | [];
}

const initialState: FavoritosState = {
  favoritos: [],
};

const favoritosReducer: Reducer<FavoritosState, FavoritosAction> = (
  state = initialState,
  action
): FavoritosState => {
  switch (action.type) {
    case "MARCAR_FAVORITO":
      return {
        ...state,
        favoritos: [...state.favoritos, action.personaje],
      };
    case "DESMARCAR_FAVORITO":
      return {
        ...state,
        favoritos: [
          ...state.favoritos.filter(
            (personaje) => personaje.id !== action.personaje.id
          ),
        ],
      };
    default:
      return state;
  }
};
export default favoritosReducer;