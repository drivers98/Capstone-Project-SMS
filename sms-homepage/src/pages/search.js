import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../pagesCSS/search.css';
import SearchBar from '../components/searchBar'

const title = 'Welcome to SoftScape\'s SMS'
const fac = 'Not a Student? '
const bp1 = 'About'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'
  
  class Search extends Component {
    constructor(){
      super();
      this.state = {
        keyword: '',
      }
    }

    render() {
      return (
        <div>
        <header className="Search-header">
          <img src="/images/KentLogo.png" alt=""/>
          <h1>{title}</h1>
          <SearchBar placeholder="Search" handle={(e) => this.setState({keyword:e.target.value})} value={this.state.keyword}/>
          <Link to={"/result/" + this.state.keyword}>Submit</Link>
          <h2>{fac} 
          <Link to="/login">Click Here</Link>
          </h2>
          </header>
  
          <footer className="Search-footer">
            <b1>
             <t3><Link to="/about">{bp1}</Link></t3>  
              <t2><Link to="/termsAndCon">{bp2}</Link></t2>
             <t1><Link to="/help">{bp3}</Link></t1>
            </b1>
          </footer>
          </div>
      ); 
    }
  }
  
  export default Search;