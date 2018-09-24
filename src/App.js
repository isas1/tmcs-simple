import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';
import Typewriter from "./Typewriter";
import Logo from "./Logo/logo.jsx";

const styles = {
  float: "right",
  display: "inline",
  margin: 0,
}

class App extends Component {
  render() {
    return (
      
      <div>
        <ul style={styles}>
          <li><Logo /> </li>
        </ul>   
        <BrowserRouter>
          <div>
          <h1><Typewriter /></h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
