import React, { useState, useEffect, Component} from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
import {Card} from "react-bootstrap"
import '../pagesCSS/searchResult.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../components/searchBar';

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
        this.setState({syllabusList: response.data});
      });
    }
  
    render(){
    return (
      <div>
        <header className="Result-header">
          <img src="/images/KentLogo.png" alt="" />
          <SearchBar placeholder='Search' handle={(e) => this.setState({keyword: e.target.value})} value={this.state.keyword}/>
          <Link to={"/result/" + this.state.keyword} onClick={this.getResult}>Submit</Link>
          <button onClick={this.getResult}>what does this do?</button>
        </header>
        <body className="Result-body">
          <div>
            {this.state.syllabusList.map((syllabus) => {
              return (
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>{syllabus.Course_Name}</Card.Title>
                    <Card.Header>{syllabus.CRN}</Card.Header>
                    <Card.Text>{syllabus.Course_Description}</Card.Text>
                    <button variant="primary">Edit</button>
                  </Card.Body>
                </Card>
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
  }}
  

export default Result;