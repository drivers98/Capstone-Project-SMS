import React, { Component } from "react";
import "../pagesCSS/upload.css";
import Axios from "axios";
import { Button, Modal, } from "react-bootstrap";

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
      //message for failed upload
      messages: [],
      show: false,
    }
    this.submitSyllabus = this.submitSyllabus.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onChange = this.onChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }

  handleClose() { this.setState({ show: false }) }

  handleShow() { this.setState({ show: true }); }

  submitSyllabus() {
    // Axios.post("http://localhost:9000/DBcommands/uploadSyllabus", {
    //   CRN: this.state.CRN,
    //   SYL: this.state.SYLfile,
    // });
    Axios.post("http://localhost:9000/DBcommands/uploadCourses", {
      SYL: this.state.SYL,
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
    }).then((response) => {
        this.setState({ messages: response.data.messages })
            
        console.log(this.state.messages.length)

        if (this.state.messages.length !== 0) {
            this.handleShow()
        }
        else {
          this.props.history.push('/home')
        }
    });    
    // this.props.history.push('/home')
    // this.setState({ show: true })
  };


  componentDidMount() {
    Axios.defaults.withCredentials = true;

    Axios.get("http://localhost:9000/DBcommands/loginInstructor",).then((response) => {
      if (response.data.loggedIn) {
        this.setState({ instr_ID: response.data.user[0].Instructor_ID });
      }
      else {
        this.props.history.push('/login')
      }
      console.log(response);
    })
  };

  onChange = e => {
    console.log(e.target.files)
    this.setState({ SYLfile: e.target.files[0] });
    this.setState({ filename: e.target.files[0].name });
  };

  render() {
    return (
      <div className="upload-main">
        <form className="upload-column">
          <h1>Create a Syllabus</h1>
          <h4>Upload your own syllabus or enter each field manually</h4>

          <input
          className="upload-file-select"
          type="file"
          name="Syllabus"
          onChange={(e) => {
            this.setState({ SYL: e.target.value });
          }}
          //value={{SYL}}
        />

          <input
            className="upload-input"
            placeholder="Course CRN*"
            type="text"
            name="Course CRN"
            onChange={(e) => {
              this.setState({ CRN: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Course Name*"
            type="text"
            name="Course Name"
            onChange={(e) => {
              this.setState({ course_Name: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Semester*"
            type="text"
            name="Semester"
            onChange={(e) => {
              this.setState({ semester: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Meeting Time"
            type="text"
            name="Meeting Time"
            onChange={(e) => {
              this.setState({ meeting_Time: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Location"
            type="text"
            name="Location"
            onChange={(e) => {
              this.setState({ location: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Office Hours"
            type="text"
            name="Office Hours"
            onChange={(e) => {
              this.setState({ office_Hour: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Course Description*"
            type="text"
            name="Course Description"
            onChange={(e) => {
              this.setState({ course_Description: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Prerequisites*"
            type="text"
            name="Prerequisites"
            onChange={(e) => {
              this.setState({ prereq: e.target.value });
            }}
          />

          <input
            className="upload-input"
            placeholder="Course Topics"
            type="text"
            name="Course Topics"
            onChange={(e) => {
              this.setState({ course_Topics: e.target.value });
            }}
          />
          <p>required *</p>
          <hr />
          <Button onClick={this.submitSyllabus}> Submit </Button>
          <div className="UploadMessages">
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header>
                <Modal.Title>Upload Failed</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.state.messages.map((message) => {
                  return (
                    <p>{message}</p>
                  )
                })}
              </Modal.Body>
            </Modal>
          </div>
        </form>
      </div>
    );
  }
}



export default Upload;
