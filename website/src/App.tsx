import React from "react";
import { FaBiohazard, FaBomb } from "react-icons/fa";
import "./App.css";
import Header from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <div className="row">
          <div className="col">
            <FaBiohazard className="App-logo" size={150} />
          </div>
          <div className="col">
            <FaBomb className="App-logo" size={150} />
          </div>
        </div>
        <p>Coming to a University of New Mexico Near You!</p>
      </header>
    </div>
  );
}

export default App;
