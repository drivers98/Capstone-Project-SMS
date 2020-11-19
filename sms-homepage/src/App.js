import React, { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// pages
import SearchPage from "./pages/search";
import AboutPage from "./pages/about-page";
import HelpPage from "./pages/help-page";
import TermsAndCon from "./pages/terms";
import UploadPage from "./pages/instructUpload";
import NotFound from "./pages/404";
import Result from "./pages/searchResult";
import LoginPage from "./pages/instrLogin";
import RegisterPage from "./pages/regInstruct"
import HomeInstructor from "./pages/instructHome"

class App extends Component {
  render() {
    return(
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchPage}/>
              <Route exact path="/result/:keyword" component={Result}/>
              <Route exact path="/help" component={HelpPage}/>
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/register" component={RegisterPage}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/home" component={HomeInstructor}/>
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

export default App;
