import { bindActionCreators, Reducer } from "@reduxjs/toolkit";
import { PersonajesAction } from "../actions/personajesActions";
import Personaje from "../types/personaje";

export interface PersonajesState {
  busqueda: string;
  personajes: Personaje[];
  status: "CARGANDO" | "COMPLETADO" | "COMPLETADO_CON_ERROR";
  error: string | null;
  sigPag: string | null;
  antPag: string | null;
}

const initialState: PersonajesState = {
  busqueda: "",
  personajes: [],
  status: "CARGANDO",
  error: null,
  sigPag: null,
  antPag: null,
};

const personajesReducer: Reducer<PersonajesState, PersonajesAction> = (
  state = initialState,
  action
): PersonajesState => {
  switch (action.type) {
    case "BUSCAR_PERSONAJES":
      return {
        ...state,
        busqueda: action.name,
        status: "CARGANDO",
        error: null,
      };
    case "BUSCAR_PERSONAJES_EXITO":
      return {
        ...state,
        status: "COMPLETADO",
        personajes: action.personajes,
        error: null,
      };
    case "BUSCAR_PERSONAJES_ERROR":
      return {
        ...state,
        status: "COMPLETADO_CON_ERROR",
        error: action.error,
        personajes: [],
      };
    case "CAMBIAR_PAG":
      return {
        ...state,
        sigPag: action.sigPag,
        antPag: action.antPag,
      };
    default:
      return state;
  }
};

export default personajesReducer;
