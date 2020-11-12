import React, { useState, Component } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//import router from "../../sms-backend/routes/DBcommands";

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
*/
// pages
import SearchPage from "./pages/search";
import AboutPage from "./pages/about-page";
import HelpPage from "./pages/help-page";
import TermsAndCon from "./pages/terms";
import UploadPage from "./pages/instructUpload";
import NotFound from "./pages/404";
import Result from "./pages/searchResult";

class App extends Component {
  render() {
    return(
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchPage}/>
              <Route exact path="/result" component={Result}/>
              <Route exact path="/help" component={HelpPage}/>
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/upload" component={UploadPage}/>
              <Route exact path="/termsAndCon" component={TermsAndCon}/>
              <Route exact path="/404" component={NotFound}/>
              <Redirect to="/404"/>
            </Switch>
          </Router>
        </div>
    );
  }
}

/*
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

        <footer className="App-footer">
          <b1>
           <t3>{bp1}</t3>  
            <t2>{bp2}</t2>
           <t1>{bp3}</t1>
          </b1>
        </footer>
        </div>
    ); 
  }
}
*/

export default App;
