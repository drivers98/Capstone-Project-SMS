import React, { Component } from "react";
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
const title = 'Welcome to SoftScape\'s SMS'
const fac = 'Not a Student?'

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

class App extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
        <img src="/images/KentLogo.png" alt=""/>
        <h1>{title}</h1>
        <SearchBar />
        <h2>{fac} <a
          className="App-link"
          href="https://login.kent.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Click Here
        </a>
          </h2>
        </header>
        </div>
    ); 
  }
}



export default App;
