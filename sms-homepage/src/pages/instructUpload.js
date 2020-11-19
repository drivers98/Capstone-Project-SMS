import React, { useState,  } from "react";
import "../pagesCSS/upload.css";
import Axios from "axios";
import { Link } from "react-router-dom";

const Upload = () => {
  //instructor table
  const [instr_ID, setInstr_ID] = useState("");
  const [instr_Name, setInstr_Name] = useState("");
  //syllabus table
  const [CRN, setCRN] = useState("");
  const [SYL, setSYL] = useState("");
  //courses
  const [course_Name, setCourse_Name] = useState("");
  const [semester, setSemester] = useState("");
  const [meeting_Time, setMeeting_Time] = useState("");
  const [location, setLocation] = useState("");
  const [office_Hour, setOffice_Hour] = useState("");
  const [course_Description, setCourse_Description] = useState("");
  const [prereq, setPrereq] = useState("");
  const [course_Topics, setCourse_Topics] = useState("");

  const submitSyllabus = () => {
    Axios.post("http://localhost:9000/DBcommands/uploadSyllabus", {
      CRN: CRN,
      SYL: SYL,
    });
    Axios.post("http://localhost:9000/DBcommands/uploadCourses", {
      instr_ID: instr_ID,
      CRN: CRN,
      course_Name: course_Name,
      semester: semester,
      meeting_Time: meeting_Time,
      location: location,
      office_Hour: office_Hour,
      course_Description: course_Description,
      prereq: prereq,
      course_Topics: course_Topics,
    });
  };

  return (
    <div className="upload-main">
      <div className="upload-column">
        <h1>Create a Syllabus</h1>
        <h4>Upload your own syllabus or enter each field manually</h4>

        <input
          className="upload-file-select"
          type="file"
          name="Syllabus"
          onChange={(e) => {
            setSYL(e.target.value);
          }}
          //value={{SYL}}
        />

        <input
          className="upload-input"
          placeholder="KSU ID"
          type="text"
          name="ID"
          onChange={(e) => {
            setInstr_ID(e.target.value);
          }}
          //value={{instr_ID}}
        />

        <input
          className="upload-input"
          placeholder="Name"
          type="text"
          name="Name"
          onChange={(e) => {
            setInstr_Name(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Course CRN"
          type="text"
          name="Course CRN"
          onChange={(e) => {
            setCRN(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Course Name"
          type="text"
          name="Course Name"
          onChange={(e) => {
            setCourse_Name(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Semester"
          type="text"
          name="Semester"
          onChange={(e) => {
            setSemester(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Meeting Time"
          type="text"
          name="Meeting Time"
          onChange={(e) => {
            setMeeting_Time(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Location"
          type="text"
          name="Location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Office Hours"
          type="text"
          name="Office Hours"
          onChange={(e) => {
            setOffice_Hour(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Course Description"
          type="text"
          name="Course Description"
          onChange={(e) => {
            setCourse_Description(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Prerequisites"
          type="text"
          name="Prerequisites"
          onChange={(e) => {
            setPrereq(e.target.value);
          }}
        />

        <input
          className="upload-input"
          placeholder="Course Topics"
          type="text"
          name="Course Topics"
          onChange={(e) => {
            setCourse_Topics(e.target.value);
          }}
        />

        <Link to="/" onClick={submitSyllabus}>
          <div className="upload-submit">Submit</div>
        </Link>
      </div>
    </div>
  );
};

export default Upload;
