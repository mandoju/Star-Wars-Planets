import React, { ReactElement } from 'react';

interface NavBarProps {
    children : ReactElement
}

export const NavBar = ({children} : NavBarProps) => {

    return (<nav className={"navbar navbar-expand-lg navbar-light bg-dark"}>
        {children}
    </nav>)
}