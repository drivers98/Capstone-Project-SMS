import React, {useEffect} from "react";
import {Card} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultCard = (props) => {
    
    // useEffect(() => {

    // }), [];

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.Course_Name}</Card.Title>
                    <Card.Header>{props.CRN}</Card.Header>
                    <Card.Text>{props.Course_Description}</Card.Text>
                    <button variant="primary">Edit</button>
                </Card.Body>
            </Card>
        )
    

};

export default ResultCard;