import React, { Component, } from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
import '../pagesCSS/searchResult.css';
import SearchBar from '../components/searchBar';
import ResultCard from '../components/resultCard';
import { CardColumns } from "react-bootstrap";

const bp1 = 'About'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'

// function Result(props) {

//   const [SyllabusList, setSyllabusList] = useState([]);
//   const [keyword, setKeyword] = useState(props.match.params.keyword);

//   getResults() {
//     Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${keyword}`).then((response) => {
//       setSyllabusList(response.data);
//     });
//   };

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.match.params.keyword,
      syllabusList: [],
    }
    this.getResult = this.getResult.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  getResult() {
    Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${this.state.keyword}`).then((response) => {
      console.log(response)
      this.setState({ syllabusList: response.data });
    });
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${this.state.keyword}`).then((response) => {
      this.setState({ syllabusList: response.data });
    });
  }


  render() {
    return (
      <div>
        <header className="Result-header">
          <img src="/images/KentLogo.png" alt="" />
          <SearchBar placeholder='Search' handle={(e) => this.setState({ keyword: e.target.value })} value={this.state.keyword} />
          <button onClick={this.getResult}>Submit</button>
        </header>
        <hr/>
        <body className="Result-body">
          <div className="cards">
            <CardColumns >
              {this.state.syllabusList.map((syllabus) => {
                return (
                  <ResultCard
                    Course_Name={syllabus.Course_Name}
                    CRN={syllabus.CRN}
                    Course_Description={syllabus.Course_Description}
                    Semester={syllabus.Semester}
                    Location={syllabus.Location}
                    Meeting_Time={syllabus.Meeting_Time}
                    Office_Hours={syllabus.Office_Hours}
                    Prerequisites={syllabus.Prerequisites}
                    Course_Topics={syllabus.Course_Topics}
                    instructOption={false}
                  />
                )
              }
              )}
            </CardColumns>
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