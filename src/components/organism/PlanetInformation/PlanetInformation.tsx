import React from "react";
import { LabelValueText } from "../../molecule/LabelValueText/LabelValueText";
import style from "./style.module.css";
import { getClassNames } from "../../../utils/className";

export interface PlanetInformationProps {
  population: string;
  climate: string;
  terrain: string;
  films?: number;
}

/**
 * Este componente renderiza todas as informações do planeta (população , clima, terreno e número de fiulmes)
 * @param population população do planeta
 * @param climate clima do planeta
 * @param terrain terreno que o planeta possui
 * @param films número de filmes em que o planeta apareceu
 */


export const PlanetInformation = ({
  population,
  climate,
  terrain,
  films
}: PlanetInformationProps) => {
  const textClass = getClassNames(style.animatedText, "text-warning")
  return (
    <div className={style.planetInformationContainer}>
      <div className={style.planetPopulationClimateTerrainContainer}>
      <LabelValueText
        label={"Population: "}
        value={population}
        labelClassName={textClass}
        valueClassName={textClass}
      />
      <LabelValueText
        label={"Climate: "}
        value={climate}
        labelClassName={textClass}
        valueClassName={textClass}
      />
      <LabelValueText
        label={"Terrain: "}
        value={terrain}
        labelClassName={textClass}
        valueClassName={textClass}
      />
      </div>
      <div className={style.featuredTextContainer}>
      <p className={textClass}>{featuredFilmsText(films)}</p>
        </div>
    </div>
  );
};

const featuredFilmsText = (films?: number) => {
  if (films === undefined) {
    return "";
  }
  const filmsText = films > 1 ? "films" : "film";
  return `Feature in ${films} ${filmsText} `;
};
