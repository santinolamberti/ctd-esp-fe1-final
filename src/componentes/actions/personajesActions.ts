import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit"
import { IRootState } from "../redux/store";
import Personaje from "../types/personaje";
import { buscarPersonajesAPI } from "../services/services";

export interface BuscarPersonajesAction extends Action{
    type: "BUSCAR_PERSONAJES",
    name: string
}

export interface BuscarPersonajesExitoAction extends Action{
    type: "BUSCAR_PERSONAJES_EXITO",
    personajes: Personaje[];
}

export interface BuscarPersonajesErrorAction extends Action{
    type: "BUSCAR_PERSONAJES_ERROR",
    error: string
}

export interface CambiarPagAction extends Action {
    type: "CAMBIAR_PAG";
    sigPag: string | null;
    antPag: string | null;
}

export type PersonajesAction = BuscarPersonajesAction | BuscarPersonajesExitoAction | BuscarPersonajesErrorAction | CambiarPagAction

interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAction>{};

 const buscarPersonajes:ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return {
        type: "BUSCAR_PERSONAJES",
        name: name
    }
}

const buscarPersonajesExito:ActionCreator<BuscarPersonajesExitoAction> = (personajes: Personaje[]) => {
    return {
        type: "BUSCAR_PERSONAJES_EXITO",
        personajes: personajes
    }
}

const buscarPersonajesError:ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: "BUSCAR_PERSONAJES_ERROR",
        error: error
    }
}

const cambiarPag: ActionCreator<CambiarPagAction> = (
    sigPag: string | null,
    antPag: string | null
) => {
    return {
         type: "CAMBIAR_PAG",
         sigPag: sigPag,
         antPag: antPag
    }
}

export const buscarPersonajesThunk = (url?: string | null, name?: string): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        dispatch(buscarPersonajes(name));
        try{
            const response = await buscarPersonajesAPI(url, name);
            dispatch(buscarPersonajesExito(response.results))
            dispatch(cambiarPag(response.info.next, response.info.prev))
        }catch(e){
            dispatch(buscarPersonajesError(e))
        }
    }
}


