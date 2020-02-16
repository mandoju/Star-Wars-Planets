export const getClassNames = (
  firstClassName: string,
  secondClassName?: string
) => {
  return secondClassName
    ? `${firstClassName} ${secondClassName}`
    : `${firstClassName}`;
};
