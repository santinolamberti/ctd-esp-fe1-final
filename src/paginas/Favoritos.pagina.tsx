import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { IRootState } from "../componentes/redux/store";
import { FC } from "react";

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 * @author Santino Lamberti
 * @returns {JSX.Element}
 */

const PaginaFavoritos: FC = (): JSX.Element => {
  const { favoritos } = useSelector((state: IRootState) => state.favoritos);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GrillaPersonajes personajes={favoritos} />
    </div>
  );
};

export default PaginaFavoritos;
