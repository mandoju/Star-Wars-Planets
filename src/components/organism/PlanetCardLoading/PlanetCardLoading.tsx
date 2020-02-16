import React from "react";
import { Container } from "../../atom/Container/Container";
import styles from "./style.module.css";
import { getClassNames } from "../../../utils/className";
//import ReactLoading from "react-loading";

/**
 *
 * Este componente renderiza um cartão com um "Loading" dentro
*/

export const PlanetCardLoading = () => {
  return (
    <Container className={getClassNames(styles.planetCardContainer,"bg-secondary")}>
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Container>
  );
};
