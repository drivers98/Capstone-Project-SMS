import React, { Component } from "react";
import Axios from "axios";
import '../pagesCSS/logReg.css';
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";


class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            ksu_id: "",
            name: "",
            messages: [],
            show: false,
        }
        this.submitInstructor = this.submitInstructor.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClose() { this.setState({ show: false }) }
    handleShow() { this.setState({ show: true }); }

    submitInstructor() {
        Axios.post("http://localhost:9000/DBcommands/registerInstructor", {
            instr_ID: this.state.ksu_id,
            instr_Name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
        }).then((response) => {
            this.setState({ messages: response.data.messages })
            
            console.log(this.state.messages.length)

            if (this.state.messages.length != 0) {
                this.handleShow()
            }
            else {
                this.props.history.push('/login')
            }
        });        
    }

    render() {
        return (
            <div>
                <header className="Register-header">
                    <div className="card">
                        <h1 className="Register-h1">Registration</h1>
                        <br />
                        <input type="name" placeholder="Full Name" onChange={(e) => this.setState({ name: e.target.value })} />
                        <br />
                        <input type="ksu_id" placeholder="KSU ID" onChange={(e) => this.setState({ ksu_id: e.target.value })} />
                        <br />
                        <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        <input type="Password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                        <br />
                        <input type="Password" placeholder="Comfirm Password" onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                        <br />
                        <Button onClick={this.submitInstructor}>Register</Button>
                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title>Registration Error</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this.state.messages.map((message) => {
                                return (
                                    <p>{message}</p>
                                )
                            })}
                        </Modal.Body>
                    </Modal>
                </header>
            </div>
        )
    }
}

export default Register;
