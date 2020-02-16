import React from 'react';
import './App.css';
import { Header } from './components/organism/Header';
import { RandomPlanetPage } from './pages/RandomPlanetPage';
import { useState } from 'react';
import { useCreatePlanetContext, PlanetContext } from './hooks/PlanetContext';



function App() {
  const {planet,setPlanet} = useCreatePlanetContext();

  return (
    <PlanetContext.Provider value={{ planet, setPlanet }}>

      <div className={"bg-dark"}>
        <Header />
        <RandomPlanetPage />
      </div>
    </PlanetContext.Provider>

  );
}

export default App;
