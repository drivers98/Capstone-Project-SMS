import React, { Component } from "react";
import { Navbar, Nav, Form, CardColumns, Button } from "react-bootstrap";
import Axios from "axios"
import '../pagesCSS/searchResult.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from '../components/searchBar';
import ResultCard from '../components/resultCard'
import { Link } from "react-router-dom";


const bp1 = 'About'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'

class InstructHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      keyword: "",
      name: "", syllabusList: [],
    }
    this.getResult = this.getResult.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  getResult() {
    Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${this.state.keyword}`).then((response) => {
      this.setState({ syllabusList: response.data });
    });
  }

  logout(){
    Axios.get("http://localhost:9000/DBcommands/logoutInstructor",)
    window.location.reload(false)
  }

  componentDidMount() {
    Axios.get("http://localhost:9000/DBcommands/loginInstructor",).then((response) => {
      if (response.data.loggedIn) {
        this.setState({ keyword: response.data.user[0].Instructor_Name })
        this.setState({ name: this.state.keyword })

        Axios.get(`http://localhost:9000/DBcommands/showSyllabus/${this.state.keyword}`).then((response) => {
          this.setState({ syllabusList: response.data });
        });
      }
      else {
        this.props.history.push('/login')
      }
      console.log(response);
    })
  };

  render() {
    return (
      <div>
        <header className="Result-header">
          <img src="/images/KentLogo.png" alt="" />
        </header>

        <Navbar bg="light" expand="lg">
            {/* <Navbar.Brand>React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/upload" >Upload</Nav.Link>
                    <Nav.Link onClick={this.componentDidMount}>My Syllabi</Nav.Link>
                    <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                </Nav>
                <Form inline>
                    <SearchBar placeholder='Search' handle={(e) => this.setState({ keyword: e.target.value })} value={this.state.keyword} />
                    <Button onClick={this.getResult}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>

        <body className="Result-body">
          <div>
            <hr/>

            <CardColumns>
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
                    Inst_Name={this.state.name}
                    instructOption={true}
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


export default InstructHome;