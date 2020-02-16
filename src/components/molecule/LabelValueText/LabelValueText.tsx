import React from "react";
import style from "./style.module.css";

interface LabelValueTextProps {
  label: string;
  value: string;
  labelClassName?: string;
  valueClassName?: string;
}

/**
 * Este componente renderiza um texto ao estilo "label value", onde ficam em uma linha lado a lado.
 * @param label representa o texto que irá aparecer na label. Ele é posicionado a esquerda.
 * @param value representa o texto do valor que irá aparecer. Ele é posicionado a direita.
 * @param labelClassName Classe customizada que irá ser adicionada ao texto do label.
 * @param valueClassName Classe customizada que irá ser adicionada ao texto do value.
 */
export const LabelValueText = ({
  label,
  value,
  labelClassName,
  valueClassName
}: LabelValueTextProps) => {
  return (
    <div className={style.KeyValueContainer}>
      <div className={style.labelContainer}>
        <p className={labelClassName}>{label}</p>
      </div>
      <div className={style.valueContainer}>
        <p className={valueClassName}>{value}</p>
      </div>
    </div>
  );
};
