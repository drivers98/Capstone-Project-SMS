import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap"
import Axios from 'axios'
import { Navbar, Nav, NavDropdown, Button, Modal, CardColumns } from "react-bootstrap";
import { Document } from 'react-pdf';
import 'reactjs-popup/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../pagesCSS/resultCard.css"


const Options = (props) => {
    const [SYL, setSYL] = useState('')
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    const handleShow = () => {
        Axios.get(`http://localhost:9000/DBcommands/viewSyllabus${props.CRN}`).then((response) => {
            setSYL(response);
        })
        setShow(true);
    }

    const deleteCourse = (CRN) => {
        Axios.delete(`http://localhost:9000/DBcommands/deleteSyllabus${CRN}`)
    }

    if (props.instructOption) {
        return (
            <Navbar className="Instuctor_Options">
                <Nav >
                    <Button className="Options_buttons" variant="primary" onClick={handleShow}> View </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Document file="About_page.pdf"></Document>
                    </Modal>
                    <Button className="Options_buttons" onClick={() => { deleteCourse(props.CRN) }}>Delete</Button>
                </Nav>
            </Navbar>
        )
    }
    else {
        return (
            <div>
                <Navbar>
                    <Nav>
                        <Button variant="primary" onClick={handleShow}> View </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Document file="About page.pdf"></Document>
                        </Modal>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

const ResultCard = (props) => {

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
                <Options instructOption={props.instructOption} CRN={props.CRN} />
            </Card.Body>
        </Card>
        </CardColumns>
    )


};

export default ResultCard;