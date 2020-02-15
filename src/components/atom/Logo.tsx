import React from "react";
//import { getClassNames } from "../../../utils/className";
import styles from "./style.module.css";

interface LogoProps {
  children?: React.ReactNode
}

/**
 * Este componente serve para renderizar um texto de Header.
 * @param children Texto que irá ser renderizado
 */
export const Logo = ({ children}: LogoProps) => {
  return (
    <h1 className={styles.logo}>{children}</h1>
  );
};
