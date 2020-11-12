import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import '../pagesCSS/search.css';

class Result extends Component {
    render() {
      return (
        <div>
          <header className="Result-header">
            <img src="/images/KentLogo.png" alt=""/>
          </header>
  
          <footer className="Result-footer">
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
  
  export default Result;