import React from 'react';
import { NavBar } from '../atom/NavBar';
import { Logo } from '../molecule/Logo/Logo';


/**
 * Este componente renderiza o Header da página.
 */
export const Header = () => {
    return (  <NavBar>
        <Logo />
      </NavBar>)
}