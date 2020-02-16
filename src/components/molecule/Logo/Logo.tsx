import React from "react";
import styles from "./style.module.css";
import { Title } from "../../atom/Title";

/**
 * Este componente serve para renderizar o logo da página.
 */
export const Logo = () => {
  return (
    <Title className={styles.logo}>Star Wars Planets</Title>
  );
};
