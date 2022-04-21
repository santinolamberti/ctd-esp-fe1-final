import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje"

interface MarcarFavoritoAction extends Action {
  type: "MARCAR_FAVORITO";
   personaje: Personaje;
}
interface DeesmarcarFavoritoAction extends Action {
  type: "DESMARCAR_FAVORITO";
   personaje: Personaje;
}

export const agregarFavorito: ActionCreator<MarcarFavoritoAction> = (
  personaje: Personaje
): MarcarFavoritoAction => {
  return {
    type: "MARCAR_FAVORITO",
      personaje: personaje,
  };
};
export const eliminarFavorito: ActionCreator<DeesmarcarFavoritoAction> = (
  personaje: Personaje
): DeesmarcarFavoritoAction => {
  return {
    type: "DESMARCAR_FAVORITO",
    personaje: personaje,
  };
};

export type FavoritosAction = MarcarFavoritoAction | DeesmarcarFavoritoAction;