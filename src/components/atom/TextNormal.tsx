import React from 'react';

interface TextNormalProps {
    children: string;
    className?: string;
}

export const TextNormal = ({children, className}: TextNormalProps) => {
    return (<p {...className ?  {className }: {}}>{children}</p>)
}