import React, { Children } from "react";
import styles from "./style.module.css";

/**
 * Este componente serve para renderizar um texto de titulo
 */

interface TitleProps {
    children: string
    className?: string;
}

export const Title = ({children , className}: TitleProps) => {
  return (
    <h1 {...className? {className} : {}}>{children}</h1>
  );
};
