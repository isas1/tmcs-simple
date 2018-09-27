import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Typewriter from "./Typewriter";
import Logo from "./components/Logo/logo.jsx";

import './App.css';



class App extends Component {
  render() {
    return (
      
      <div>
        <ul id="logo">
          <li><Logo /> </li>
        </ul>   
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
          <h1><Typewriter /></h1>
            <Header />
            <Container />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
