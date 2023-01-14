import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import DeviceContainer from './components/Device/DeviceContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <DeviceContainer />
    </div>
  );
}

export default App;
