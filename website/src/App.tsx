import React from 'react';
import logo from './logo.svg';
import {FaBiohazard} from 'react-icons/fa'
import './App.css';
import Header from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <FaBiohazard className="App-logo" size={150}/>
      </header>
    </div>
  );
}

export default App;
