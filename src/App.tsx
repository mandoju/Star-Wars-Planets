import React from 'react';
import './App.css';
import { NavBar } from './components/atom/NavBar';
import { Text } from './components/atom/Text';

function App() {
  return (
    <div>
      <NavBar>
        <Text text={"Star Wars Planets"} />
      </NavBar>
    </div>
  );
}

export default App;
