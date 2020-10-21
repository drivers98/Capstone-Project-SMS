import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';


 function Body() {
   return (
     <p className="App-intro">
       To get started, edit <code>src/App.js</code> and save to reload.
     </p>
   );
}


class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome, to SoftScapes SMS" />
        <Body />
      </div>
    );
  }
}

export default App;
