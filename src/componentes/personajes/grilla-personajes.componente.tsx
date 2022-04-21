import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../redux/store";
import Personaje from "../types/personaje";
import { FC, useEffect } from "react";
import { buscarPersonajesThunk } from "../actions/personajesActions";

type GrillaPersonajesProps = {
  personajes: Personaje[];
};

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @author Santino Lamberti
 * @param {GrillaPersonajesProps} personajes
 * @returns {JSX.Element}
 */

const GrillaPersonajes: FC<GrillaPersonajesProps> = ({
  personajes,
}: GrillaPersonajesProps): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      buscarPersonajesThunk("https://rickandmortyapi.com/api/character")
    );
  }, []);
  return (
    <>
      <div className="grilla-personajes">
        {personajes?.map((personaje) => {
          return <TarjetaPersonaje personaje={personaje} key={personaje.id} />;
        })}
      </div>
    </>
  );
};

export default GrillaPersonajes;
