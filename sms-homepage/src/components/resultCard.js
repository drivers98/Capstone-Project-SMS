import React, { useState } from "react";
import { Card } from "react-bootstrap"
import Axios from 'axios'
import {Button, Modal, CardColumns } from "react-bootstrap";
import AllPagesPDFViewer from "../components/pdf/all-pages";
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pagesCSS/resultCard.css"
import samplePDF from "../PDF/CapstoneSyllabusFall2020.pdf";

const deleteCourse = (CRN) => {
    Axios.delete(`http://localhost:9000/DBcommands/deleteSyllabus${CRN}`);
    window.location.reload(false)
}

const Options = (props) => {


    if (props.instructOption) {
        return (
            <div className="Instuctor_Options">
                <Button className="Options_buttons" onClick={() => {deleteCourse(props.CRN)}}>Delete</Button>
            </div>
        )
    }  
    else{
        return(<div></div>)
    }
}

const ResultCard = (props) => {

    const [SYL, setSYL] = useState(null)
    // const [blob, setBlob] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    const handleShow = () => {
        Axios.get(`http://localhost:9000/DBcommands/viewSyllabus${props.CRN}`, {responseType: 'blob'}).then((response) => {
            console.log(response.data)
            // const file = new Blob([response.data],{type: 'application/pdf'});
            // const fileURL = URL.createObjectURL(file);
            setSYL(response.data);
            // console.log(file);
            // console.log(fileURL);
            // window.open(fileURL)

        })
        // const file = new Blob(blob, {type: 'application/pdf'});
        setShow(true);
    }
    

    return (
        
        <CardColumns>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.Course_Name}</Card.Title>
                <Card.Header>
                    <ul>
                        <li>CRN: {props.CRN}</li>
                        <li>Semester: {props.Semester}</li>
                        <li>Time: {props.Meeting_Time}</li>
                        <li>Office hours: {props.Office_Hours}</li>
                        <li>Location: {props.Location}</li>
                    </ul>
                </Card.Header>
                    <Card.Text>
                        <dl>
                            <dt>Description</dt>
                            <dd>- {props.Course_Description}</dd>
                            <dt>Prerequisites</dt>
                            <dd>- {props.Prerequisites}</dd>
                            <dt>Course Topics</dt>
                            <dd>- {props.Course_Topics}</dd>
                        </dl>
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}> View </Button>

                    <Modal show={show} onHide={handleClose}>
                        <AllPagesPDFViewer pdf={samplePDF} />
                    </Modal>
                    <Options instructOption={props.instructOption} CRN={props.CRN} />
                </Card.Body>
            </Card>
        </CardColumns>
    )


};

export default ResultCard;