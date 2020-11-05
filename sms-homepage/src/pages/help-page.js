import React, { useState, Component } from "react";
import '../pagesCSS/help.css';
import { Link  } from "react-router-dom";


const title = 'SoftScape’s SMS Help'
const bp1 = 'Search a Syllabus'
const bp2 = 'Terms & Conditions'
const bp3 = 'About'
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
const bo3 = "name, number, or faculty member that teaches the course. After, hit the enter button on the "
const bo4 = "keyboard. This action will cause the website to redirect to the results page and on the results"
const bo5 = "page, click the desired course syllabus to be viewed."


class help extends Component {
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
<wb1>{bo3}</wb1>
<wb1>{bo4}</wb1>
<wb1>{bo5}</wb1>
<tb1>{he2}</tb1>
<tb2>{gs}</tb2>
<wb1>The purpose of SoftScape’s Syllabus management system (SMS) is to provide an easy </wb1>
<wb1>way for Faculty to gain access to their syllabus, or syllabi for the courses they teach. Faculty </wb1>
<wb1>members have the option to create, delete, update, and view a syllabus but the course </wb1>
<wb1>coordinators must ok the changes before they will be visible to everyone.</wb1>
<tb2>{hu}</tb2>
<wb1>Navigate to the homepage/Search a Syllabus and there under the search bar, there is a </wb1>
<wb1>“Click Here” hyperlink next to the “Not a student” text. Click on the “Click Here” hyperlink and </wb1>
<wb1>then you will be redirected to login your flashline credentials. Upon successful login, you will be </wb1>
<wb1>redirected to the faculty view and from there you can manage different syabulli and all actions</wb1>
<wb1>done in the faculty view will need to be approved by an administrator before any changes will be</wb1>
<wb1>made viewable.</wb1>
<wb1>-------------------------------</wb1>
<wb1>Email administrator for additional help.</wb1>
</body>
        <footer className="App-footer">
          <b1>
           <t3><Link to="/">{bp1}</Link></t3>  
            <t2>{bp2}</t2>
           <t1><Link to="/about">{bp3}</Link></t1>
          </b1>
        </footer>
        </div>
    ); 
  }
}

export default help;