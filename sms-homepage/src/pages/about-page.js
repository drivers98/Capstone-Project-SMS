import React, { useState, Component } from "react";
import '../pagesCSS/about.css';
import { Link } from "react-router-dom";


const title = 'SoftScape’s SMS About'
const bp1 = 'Search a Syllabus'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'
const he1 = "Students"
const he2 = "Faculty"
const gs = "Getting Started"
const hu = "How to Use"
const para1 = "The purpose of SoftScape’s Syllabus management system (SMS) is to provide an easy"
const para2 = "way for students to gain access to the most up to date syllabus for all the Kent State CS"
const para3 = "courses. No login is required for viewing the different syllabus. This website only contains syllabi"
const para4 = "of the Kent State Computer Science department. "
const bo1 = "Navigate to the homepage where there is a search bar. There are many different options"
const bo2 = "for what the user can type in so they can view a syllabus. In the search bar enter, a course"

const l1 = ""
const l2 = ""
const l3 = ""
const l4 = "Kent State and to allow the faculty members that teach or manage those courses to"
const l5 = "have the ability to create, delete, or update a syllabus. We decided to take the SMS task"
const l6 = "in order to fulfil our 2020 capstone project course requirement."


class about extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
        <img src="/images/KentLogo.png" alt=""/>
        <h1>{title}</h1>
        </header>
<body className="App-body">
<tb1>{he1}</tb1>
<tb2>{gs}</tb2>
<wb1>{para1}</wb1>
<wb1>{para2}</wb1>
<wb1>{para3}</wb1>
<wb1>{para4}</wb1>
<tb2>{hu}</tb2>
<wb1>{bo1}</wb1>
<wb1>{bo2}</wb1>
<tb1>{he2}</tb1>
<wb1>{para1}</wb1>
<wb1>{l2}</wb1>
<wb1>{l3}</wb1>
<wb1>{l4}</wb1>
<wb1>{l5}</wb1>
<wb1>{l6}</wb1>
</body>
        <footer className="App-footer">
          <b1>
           <t3><Link to="/">{bp1}</Link></t3>  
            <t2>{bp2}</t2>
           <t1><Link to="/help">{bp3}</Link></t1>
          </b1>
        </footer>
        </div>
    ); 
  }
}

export default about;
