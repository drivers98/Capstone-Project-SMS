import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
import {Card} from "react-bootstrap"
import '../pagesCSS/searchResult.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../components/searchBar';

const bp1 = 'About'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'

function Result(props) {

  const [SyllabusList, setSyllabusList] = useState([]);
  const [keyword, setKeyword] = useState(props.match.params.keyword);

  useEffect(() => {
    Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${keyword}`).then((response) => {
      setSyllabusList(response.data);
    });
  });

  return (
    <div>
      <header className="Result-header">
        <img src="/images/KentLogo.png" alt="" />
        <SearchBar placeholder='Search' handle={(e) => setKeyword(e.target.value)} value={keyword}/>
        <Link to={'/upload'}>Upload</Link>
      </header>
      <body className="Result-body">
        <div>
          {SyllabusList.map((syllabus) => {
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
}

export default Result;