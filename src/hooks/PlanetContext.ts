import React, { useState, useContext } from "react";
import { AppPlanet } from "../models/AppModels/Planet";

/**
 * Planeta padrão que irá iniciar o contexto.
 */
const planetDefault: AppPlanet = {
    name: "planeta",
    population: "10000",
    climate: "too hot",
    terrain: "snowy",
    films: "0"
  };

/**
 * função de setState padrão que irá iniciar o contexto
 */ 
const setPlanetDefault: React.Dispatch<React.SetStateAction<AppPlanet>> = () => {};

/**
 * contexto que irá salvar as informações do planeta atual
 */
export const PlanetContext = React.createContext({
    planet: planetDefault,
    setPlanet: setPlanetDefault
});
  
/**
 * hook que irá criar o contexto do planeta com estados do planeta atual e seta o planeta atual
 */
export const useCreatePlanetContext = () => {
    const [planet, setPlanet] = useState(planetDefault);
    React.createContext({
        planet: planetDefault,
        setPlanet: setPlanetDefault
      });
    return {planet,setPlanet}
}

/**
 * hook para pegar o contxto do planeta atual
 */
export const usePlanetContext = () => {
    const {planet,setPlanet} = useContext(PlanetContext)
    return {planet, setPlanet}
}

