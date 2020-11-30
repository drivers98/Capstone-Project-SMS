import React, { useState, useEffect, Component } from "react";
import "../pagesCSS/upload.css";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

class Upload extends Component {

  constructor() {
    super()
    this.state = {
  //syllabus table requirements
      CRN: "",
      SYL: "",
  //courses requirments
      instr_ID: "",
      course_Name: "",
      semester: "",
      meeting_Time: "",
      location: "",
      office_Hour: "",
      course_Description: "",
      prereq: "",
      course_Topics: "",
    }
    this.submitSyllabus = this.submitSyllabus.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  submitSyllabus() {
    Axios.post("http://localhost:9000/DBcommands/uploadSyllabus", {
      CRN: this.state.CRN,
      SYL: this.state.SYL,
    });
    Axios.post("http://localhost:9000/DBcommands/uploadCourses", {
      instr_ID: this.state.instr_ID,
      CRN: this.state.CRN,
      course_Name: this.state.course_Name,
      semester: this.state.semester,
      meeting_Time: this.state.meeting_Time,
      location: this.state.location,
      office_Hour: this.state.office_Hour,
      course_Description: this.state.course_Description,
      prereq: this.state.prereq,
      course_Topics: this.state.course_Topics,
    });
  };


  componentDidMount() {
    Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:9000/DBcommands/loginInstructor",).then((response) => {
      if (response.data.loggedIn) {
        this.setState({instr_ID: response.data.user[0].Instructor_ID});
      }
      else {
         this.props.history.push('/login')
      }
      //  this.setState({email: response.data.user[0].Email})
      //  this.setState({KSU_ID: response.data.user[0].Instructor_ID})
      console.log(response);
    })
  };

render(){
  return (
    <div className="upload-main">
      <div className="upload-column">
        <h1>Create a Syllabus {this.state.instr_ID}</h1>
        <h4>Upload your own syllabus or enter each field manually</h4>

        <input
          className="upload-file-select"
          type="file"
          name="Syllabus"
          onChange={(e) => {
            this.setState({SYL: e.target.value});
          }}
        //value={{SYL}}
        />

        <input
          className="upload-input"
          placeholder="Course CRN"
          type="text"
          name="Course CRN"
          onChange={(e) => {
            this.setState({CRN: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Course Name"
          type="text"
          name="Course Name"
          onChange={(e) => {
            this.setState({course_Name: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Semester"
          type="text"
          name="Semester"
          onChange={(e) => {
            this.setState({semester: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Meeting Time"
          type="text"
          name="Meeting Time"
          onChange={(e) => {
            this.setState({meeting_Time: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Location"
          type="text"
          name="Location"
          onChange={(e) => {
            this.setState({location: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Office Hours"
          type="text"
          name="Office Hours"
          onChange={(e) => {
            this.setState({office_Hour: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Course Description"
          type="text"
          name="Course Description"
          onChange={(e) => {
            this.setState({course_Description: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Prerequisites"
          type="text"
          name="Prerequisites"
          onChange={(e) => {
            this.setState({prereq: e.target.value});
          }}
        />

        <input
          className="upload-input"
          placeholder="Course Topics"
          type="text"
          name="Course Topics"
          onChange={(e) => {
            this.setState({course_Topics: e.target.value});
          }}
        />

        <Link to="" onClick={this.submitSyllabus}>
          <div className="upload-submit">Submit</div>
        </Link>
      </div>
    </div>
  );
}    }



export default Upload;
