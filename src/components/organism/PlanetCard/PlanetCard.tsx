import React from "react";
import { Title } from "../../atom/Title";
import {
  PlanetInformation,
  PlanetInformationProps
} from "../PlanetInformation";
import styles from "./style.module.css";

interface PlanetCardProps extends PlanetInformationProps {
  name: string;
}

/**
 *
 * Estge componente renderiza um cartão mostrando as informações de um planeta
 *
 * @param name nome do planeta
 * @param population população do planeta
 * @param climate clima do planeta
 * @param terrian terreno do planeta
 * @param films  número de filmes que o planeta aparece
 */

export const PlanetCard = ({
  name,
  population,
  climate,
  terrain,
  films
}: PlanetCardProps) => {
  return (
    <div className={styles.planetCardContainer}>
      <Title>{name}</Title>
      <PlanetInformation
        population={population}
        climate={climate}
        terrain={terrain}
        films={films}
      />
    </div>
  );
};
