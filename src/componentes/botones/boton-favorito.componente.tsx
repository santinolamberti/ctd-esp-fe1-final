import { FC, MouseEventHandler } from "react";
import "./boton-favorito.css";

type BotonFavoritoProps = {
  esFavorito: boolean;
  onClick: MouseEventHandler;
};

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 * @author Santino Lamberti
 * @param {BotonFavoritoProps} esFavorito
 * @param {BotonFavoritoProps} onClick
 * @returns {JSX.Element}
 */

const BotonFavorito: FC<BotonFavoritoProps> = ({
  esFavorito,
  onClick,
}: BotonFavoritoProps): JSX.Element => {
  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito" onClick={onClick}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
