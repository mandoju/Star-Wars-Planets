import React, { ReactElement } from 'react';

interface NavBarProps {
    children : ReactElement
}

/**
 *  Este componente renderiza uma navbar.
 * @param children componente que será renderizado dentro da navbar
 */

export const NavBar = ({children} : NavBarProps) => {

    return (<nav className={"navbar navbar-expand-lg navbar-light bg-dark"}>
        {children}
    </nav>)
}