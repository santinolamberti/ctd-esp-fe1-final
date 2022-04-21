import "./filtros.css";
import { buscarPersonajesThunk } from "../actions/personajesActions";
import { useDispatch } from "react-redux";

const Filtros = () => {
  const dispatch = useDispatch();

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        onChange={(e) =>
          dispatch(
            buscarPersonajesThunk(
              "https://rickandmortyapi.com/api/character/",
              e.target.value
            )
          )
        }
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
      />
    </div>
  );
};

export default Filtros;
