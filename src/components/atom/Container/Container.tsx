import React from "react";
import { getClassNames } from "../../../utils/className";
import styles from "./style.module.css";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 *
 * @param children Elemento que será mostrado dentro do container
 * @param className Classe adicional que o componente pode possuir
 */

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={getClassNames(styles.container, className)}>{children}</div>
  );
};
