import React, { useState, Component } from "react";
import '../pagesCSS/upload.css';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

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
        Axios.post("http://localhost:9000/DBcommands/uploadInstructor", {
            instr_ID: instr_ID,
            instr_Name: instr_Name,
        });
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
        <div>
            <div class="row">
                <div class="column">
                    <from>
                        <h2>KSU ID</h2>
                        <input type="text" name="ID" onChange={(e) => { setInstr_ID(e.target.value) }} />
                        <h2>Name</h2>
                        <input type="text" name="Name" onChange={(e) => { setInstr_Name(e.target.value) }} />
                        <h2>Course CRN</h2>
                        <input type="text" name="Course CRN" onChange={(e) => { setCRN(e.target.value) }} />
                        <h2>Course Name</h2>
                        <input type="text" name="Course Name" onChange={(e) => { setCourse_Name(e.target.value) }} />
                        <h2>Semester</h2>
                        <input type="text" name="Semester" onChange={(e) => { setSemester(e.target.value) }} />
                    </from>
                </div>
                <div class="column">
                    <from>
                        <h2>Meeting Time</h2>
                        <input type="text" name="Meeting Time" onChange={(e) => { setMeeting_Time(e.target.value) }} />
                        <h2>Location</h2>
                        <input type="text" name="Location" onChange={(e) => { setLocation(e.target.value) }} />
                        <h2>Office Hours</h2>
                        <input type="text" name="Office Hours" onChange={(e) => { setOffice_Hour(e.target.value) }} />
                        <h2>Course Description</h2>
                        <input type="text" name="Course Description" onChange={(e) => { setCourse_Description(e.target.value) }} />
                        <h2>Prerequisites</h2>
                        <input type="text" name="Prerequisites" onChange={(e) => { setPrereq(e.target.value) }} />
                        <h2>Course Topics</h2>
                        <input type="text" name="Course Topics" onChange={(e) => { setCourse_Topics(e.target.value) }} />
                        <h2>Upload Syllabus</h2>
                        <input type="file" name="Syllabus" onChange={(e) => { setSYL(e.target.value) }} />
                        <Link to='/' onClick={submitSyllabus}>Submit</Link>
                    </from>
                </div>
            </div>

        </div>
    )
};

export default Upload;