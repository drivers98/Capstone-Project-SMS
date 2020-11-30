import React, { useState, useEffect, Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios"
import { Card } from "react-bootstrap"
import '../pagesCSS/searchResult.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../components/searchBar';
import ResultCard from '../components/resultCard'

const bp1 = 'About'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.match.params.keyword,
      syllabusList: [],
    }
    this.getResult = this.getResult.bind(this);
  }

  getResult() {
    Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${this.state.keyword}`).then((response) => {
      this.setState({ syllabusList: response.data });
    });
  }

  mySyllabi() {
    Axios.get("http://localhost:9000/DBcommands/loginInstructor",).then((response) => {
      if (response.data.loggedIn) {
        this.setState({ keyword: response.data.user[0].Instructor_Name })
        Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${this.state.keyword}`).then((response) => {
          this.setState({ syllabusList: response.data });
        });
      }
    });

  }

  componentDidMount() {
    Axios.get("http://localhost:9000/DBcommands/loginInstructor",).then((response) => {
      if (response.data.loggedIn) {
        this.setState({ name: response.data.user[0].Instructor_Name })
        this.mySyllabi();
      }
      else {
        this.props.history.push('/login')
      }
      //  this.setState({name: response.data.user[0].Name})
      //  this.setState({email: response.data.user[0].Email})
      //  this.setState({KSU_ID: response.data.user[0].Instructor_ID})
      console.log(response);
    })
  };

  render() {
    return (
      <div>
        <header className="Result-header">
          <img src="/images/KentLogo.png" alt="" />
          <SearchBar placeholder='Search' handle={(e) => this.setState({ keyword: e.target.value })} value={this.state.keyword} />
          <button onClick={this.getResult}>what does this do?</button>
          <Link to='/upload'>Upload</Link>
        </header>
        <body className="Result-body">
          <div>
            {this.state.syllabusList.map((syllabus) => {
              return (
                <ResultCard
                  Course_Name={syllabus.Course_Name}
                  CRN={syllabus.CRN}
                  Course_Description={syllabus.Course_Description}
                />
              )
            }
            )}
          </div>
        </body>
        <footer className="Result-footer">
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


export default Result;