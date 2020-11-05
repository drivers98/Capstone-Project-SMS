import React, { Component } from "react";
import './App.css';


const title = 'About SoftScape'
const bp1 = 'Search a Syllabus'
const bp2 = 'Terms & Conditions'
const bp3 = 'Help'
const teamMem1 = "Dawson Rivers"
const teamMem2 = "Joe Contumelio"
const teamMem3 = "Travis Cottrell"
const teamMem4 = "Jason Schnippel"
const teamMem5 = "Kane McHale"
const line1 = "The purpose of this website was to replace the outdated syllabus management"
const line2 = "system (SMS) of the Kent State Computer Science Department. We were placed with"
const line3 = "the task to allow students to view the syllabus of different Computer Science courses at"
const line4 = "Kent State and to allow the faculty members that teach or manage those courses to"
const line5 = "have the ability to create, delete, or update a syllabus. We decided to take the SMS task"
const line6 = "in order to fulfil our 2020 capstone project course requirement."


class App extends Component {
  render() {
    return (
      <div>
      <header className="App-header">
        <img src="/images/KentLogo.png" alt=""/>
        <h1>{title}</h1>
        </header>
<body className="App-body">
<tb1>Team Members:</tb1>
<wb1>{teamMem1}</wb1>
<wb1>{teamMem2}</wb1>
<wb1>{teamMem3}</wb1>
<wb1>{teamMem4}</wb1>
<wb1>{teamMem5}</wb1>
<tb1>Purpose: </tb1>
<wb1>{line1}</wb1>
<wb1>{line2}</wb1>
<wb1>{line3}</wb1>
<wb1>{line4}</wb1>
<wb1>{line5}</wb1>
<wb1>{line6}</wb1>
</body>
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

export default App;
