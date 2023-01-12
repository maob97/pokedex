import { API_HOST } from "../utils/constants"; // primero importamos nuestra constante API_HOST, creado en el archivo constants.js

export async function getPokemonsApi(endpointUrl) {
  // creamos una funcion asincrona con la sgte estructura
  try {
    // Añadimos un tryCatch para atrapar cualquier error que se pueda presentar
    const url = `${API_HOST}/pokemon?limit=20&offset=0`; // en esta const construimos la url indicando el limite de pokemones y que empiece desde el objeto 0
    const response = await fetch(endpointUrl || url); // en esta const ejecutamos la peticion http al servidor mediante un async fetch
    const result = await response.json(); // en esta const recuperamos los datos de la peticion formateados en en archivo json
    return result; // retornamos el result
  } catch (error) {
    throw error;
  }
}

export async function getPokemosDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
