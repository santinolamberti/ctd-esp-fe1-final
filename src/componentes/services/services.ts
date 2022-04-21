import Personaje, { Respuesta } from "../types/personaje";

export const buscarPersonajesAPI = async (
  url?: string | null,
  nombre?: string
): Promise<Respuesta> => {
  return fetch(`${url}${nombre ? `?name=${nombre}` : ""}`).then((data) =>
    data.json()
  );
};
