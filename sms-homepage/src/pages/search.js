import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import '../pagesCSS/search.css';

const title = 'Welcome to SoftScape\'s SMS'
const fac = 'Not a Student?'
const bp1 = 'About'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'

const SearchBar = () => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  
    const [keyword, setKeyword] = useState("");
  
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
  
  class Search extends Component {
    render() {
      return (
        <div>
        <header className="Search-header">
          <img src="/images/KentLogo.png" alt=""/>
          <h1>{title}</h1>
          <SearchBar />
          <h2>{fac} <a
            className="Search-link"
            href="https://login.kent.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Click Here
          </a>
            </h2>
          </header>
  
          <footer className="Search-footer">
            <b1>
             <t3><Link to="/about">{bp1}</Link></t3>  
              <t2>{bp2}</t2>
             <t1><Link to="/help">{bp3}</Link></t1>
            </b1>
          </footer>
          </div>
      ); 
    }
  }
  
  export default Search;