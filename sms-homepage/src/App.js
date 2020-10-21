import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

/*
 function Body() {
   return (
     <p className="App-intro">
       Are you a Facity Member Or Student?
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
*/

class App extends Component {
  render() {
    return (
      <div>
        <img src="/images/KentLogo.png" alt=""/>
        <h2>Welcome, to SoftScapes SMS</h2>
      </div>
    );
  }
}



export default App;
