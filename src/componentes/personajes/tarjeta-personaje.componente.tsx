import { FC, useState } from "react";
import {TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector,} from "react-redux";
import { Interface } from "readline";
import { agregarFavorito, eliminarFavorito } from "../actions/favoritosActions";
import BotonFavorito from "../botones/boton-favorito.componente";
import { IRootState } from "../redux/store";
import Personaje from "../types/personaje";
import "./tarjeta-personaje.css";


type TarjetaPersonajeProps = {
  personaje: Personaje;
};


export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * @author Santino Lamberti
 * @param {TarjetaPersonajeProps} personaje
 * @returns {JSX.Element}
 */

const TarjetaPersonaje: FC<TarjetaPersonajeProps> = ({ personaje }: TarjetaPersonajeProps): JSX.Element => {
    
  const dispatch = useDispatch()
  const { favoritos } = useSelector((state: IRootState) => state.favoritos);
  const [marcado, setMarcado] = useState<boolean>(
    favoritos.find((favorito) => favorito.id === personaje.id)? true : false
  );

  const handleClick = () => {
    marcado
      ? dispatch(eliminarFavorito(personaje))
      : dispatch(agregarFavorito(personaje));
    setMarcado(!marcado);
  };

  return (
    <div className="tarjeta-personaje">
      <img src={personaje.image} alt={personaje.name} />
      <div className="tarjeta-personaje-body">
        <span>{personaje.name}</span>
        <BotonFavorito esFavorito={marcado} onClick={handleClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
