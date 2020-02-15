import React from "react";
import { Container } from "../../atom/Container/Container";
import styles from "./style.module.css";
//import ReactLoading from "react-loading";

/**
 *
 * Este componente renderiza um cartão com um "Loading" dentro
*/

export const PlanetCardLoading = () => {
  return (
    <Container className={styles.planetCardContainer}>
      <h1>Loading</h1>
    </Container>
  );
};
