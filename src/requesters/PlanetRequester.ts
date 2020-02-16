import { validatePlanet } from "../utils/validators/planetValidator";
import Axios from "axios";

/**
 * esta função pega informações de um planeta na API dado o id
 * @param id id do planeta que irá ser buscado
 */
export const getPlanetById = async (id: number) => {
  const res = await Axios.get(`https://swapi.co/api/planets/${id}/`);
  const { data } = res;
  if (validatePlanet(data)) {
    return { ...data, films: data.films.length };
  } else {
    throw new Error("tipagem inválida do planeta");
  }
};

/**
 * esta função pega um planeta aleatório da API.
 * existem apenas 60 planetas na API. Era possível buscar a quantidade na API
 * mas seriam feitos dois requests e o request para verificar o número de planetas era pegar todos os planetas
 * logo foi decidido manter o número aqui
 */

export const getPlanetRandom = async () => {
  const randomId = Math.floor(Math.random() * 61) + 1;
  return await getPlanetById(randomId);
};
