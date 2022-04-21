import "./paginacion.css";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../redux/store";
import { buscarPersonajesThunk } from "../actions/personajesActions";
import { useEffect } from "react";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * @author Santino Lamberti
 * @returns {JSX.Element}
 */

const Paginacion = (): JSX.Element => {
  const { sigPag, antPag } = useSelector(
    (state: IRootState) => state.personajes
  );

  const dispatch = useDispatch();

  const dispatchAntPag = () => {
    dispatch(buscarPersonajesThunk(antPag));
  };

  const dispatchSigPag = () => {
    dispatch(buscarPersonajesThunk(sigPag));
  };

  return (
    <div className="paginacion">
      <button
        disabled={antPag ? false : true}
        className={"primary"}
        onClick={dispatchAntPag}
      >
        Anterior
      </button>
      <button
        disabled={sigPag ? false : true}
        className={"primary"}
        onClick={dispatchSigPag}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
