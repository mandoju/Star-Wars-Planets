import React from 'react';

interface TextNormalProps {
    text: string;
}

export const TextNormal = ({text}: TextNormalProps) => {
    return (<p>{text}</p>)
}