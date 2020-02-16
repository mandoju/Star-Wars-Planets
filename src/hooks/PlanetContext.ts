import React, { useState, useContext } from "react";
import { AppPlanet } from "../models/AppModels/Planet";

const planetDefault: AppPlanet = {
    name: "planeta",
    population: "10000",
    climate: "too hot",
    terrain: "snowy",
    films: "0"
  };

const setPlanetDefault: React.Dispatch<React.SetStateAction<AppPlanet>> = () => {};

export const PlanetContext = React.createContext({
    planet: planetDefault,
    setPlanet: setPlanetDefault
});
  
  
export const useCreatePlanetContext = () => {
    const [planet, setPlanet] = useState(planetDefault);
    React.createContext({
        planet: planetDefault,
        setPlanet: setPlanetDefault
      });
    return {planet,setPlanet}
}

export const usePlanetContext = () => {
    const {planet,setPlanet} = useContext(PlanetContext)
    return {planet, setPlanet}
}

