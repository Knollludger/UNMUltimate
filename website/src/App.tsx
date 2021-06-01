import React from "react";
import { FaBiohazard, FaBomb } from "react-icons/fa";
import "./App.css";
import Card from "./components/cards/card";
import Header from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-2">
            <FaBiohazard className="App-logo" size={150} />
          </div>
          <div className="col-lg-8">
            <p>Coming to a University of New Mexico Near You!</p>
            <Card icon={FaBiohazard} title="hello there world!"text="this is an example collapse"/>
          </div>
          <div className="col-lg-2">
            <FaBomb className="App-logo" size={150} />
          </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
