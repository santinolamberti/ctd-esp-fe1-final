import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { IRootState } from "../componentes/redux/store";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { FC } from "react";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 * @author Santino Lamberti
 * @returns {JSX.Element}
 */

const PaginaInicio: FC = (): JSX.Element => {
  const { personajes, status } = useSelector(
    (state: IRootState) => state.personajes
  );

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Limpiar filtros</button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes personajes={personajes} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
