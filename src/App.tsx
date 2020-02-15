import React from 'react';
import './App.css';
import { Header } from './components/organism/Header';
import { RandomPlanetPage } from './pages/RandomPlanetPage';

function App() {
  return (
    <div className={"bg-dark"}>
      <Header />
      <RandomPlanetPage />
    </div>
  );
}

export default App;
