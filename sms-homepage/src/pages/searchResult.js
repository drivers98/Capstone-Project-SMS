import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
import {Card} from "react-bootstrap"
import '../pagesCSS/searchResult.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import SearchBar from './search';

const bp1 = 'About'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'

const renderCard = (card, index) => {
  
};

function Result() {

  const [SyllabusList, setSyllabusList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:9000/DBcommands/showSyllabus').then((response) => {
      setSyllabusList(response.data);
      console.log(response);
    });
  });

  return (
    <div>
      <header className="Result-header">
        <img src="/images/KentLogo.png" alt="" />
      </header>
      <body className="Result-body">
        <div>
          {SyllabusList.map((syllabus) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{syllabus.Course_Name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <p>{syllabus.CRN}</p>
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
}

export default Result;