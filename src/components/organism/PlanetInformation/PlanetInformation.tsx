import React from "react";
import { LabelValueText } from "../../molecule/LabelValueText/LabelValueText";
import style from "./style.module.css";
import { TextNormal } from "../../atom/TextNormal";

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
  return (
    <div className={style.planetInformationContainer}>
      <LabelValueText
        label={"Population: "}
        value={population}
        labelClassName={style.animatedText}
        valueClassName={style.animatedText}
      />
      <LabelValueText
        label={"Climate: "}
        value={climate}
        labelClassName={style.animatedText}
        valueClassName={style.animatedText}
      />
      <LabelValueText
        label={"Terrain: "}
        value={terrain}
        labelClassName={style.animatedText}
        valueClassName={style.animatedText}
      />
      <div className={style.featuredTextContainer}>
      <TextNormal className={style.animatedText}>{featuredFilmsText(films)}</TextNormal>
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
