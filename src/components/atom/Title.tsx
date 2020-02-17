import React from "react";

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
