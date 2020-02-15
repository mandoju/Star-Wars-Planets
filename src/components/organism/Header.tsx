import React from 'react';
import { NavBar } from '../atom/NavBar';
import { Logo } from '../molecule/Logo/Logo';


export const Header = () => {
    return (  <NavBar>
        <Logo />
      </NavBar>)
}