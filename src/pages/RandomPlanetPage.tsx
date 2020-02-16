import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { PlanetCardLoading } from "../components/organism/PlanetCardLoading";
import { usePlanetContext } from "../hooks/PlanetContext";
import { getPlanetRandom } from "../requesters/PlanetRequester";
import { Container } from "../components/atom/Container/Container";
import { PlanetCard } from "../components/organism/PlanetCard/PlanetCard";


/**
 * Esse componente renderiza a página que irá mostrar os planetas aleatórios
 */
export const RandomPlanetPage = () => {
  const { planet, setPlanet } = usePlanetContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAndSetPlanet(setPlanet, setLoading);
  }, [setPlanet, setLoading]);

  const nextClick = () => {
    fetchAndSetPlanet(setPlanet, setLoading);
  };

  return (
    <div className={style.pageContainer}>
      <Container className={style.cardContainer}>
        {loading ? (
          <PlanetCardLoading />
        ) : (
          <PlanetCard
            population={planet.population}
            climate={planet.climate}
            terrain={planet.terrain}
            name={planet.name}
            films={planet.films}
          />
        )}
      </Container>
      <div className={style.buttonContainer}>
        <button onClick={nextClick} title={"Next"} />
      </div>
    </div>
  );
};

const fetchAndSetPlanet = async (setPlanet: any, setLoading: any) => {
  async function fetchPlanet() {
    setLoading(true);
    const planet = await getPlanetRandom();
    setPlanet(planet);
    setLoading(false);
  }
  fetchPlanet();
};
