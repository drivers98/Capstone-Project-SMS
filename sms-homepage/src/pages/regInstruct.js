import React, { Component } from "react";
import Axios from "axios";
import '../pagesCSS/logReg.css';
import { Link } from "react-router-dom";


class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            ksu_id: "",
            name: "",
        }
        this.submitInstructor = this.submitInstructor.bind(this)
    }

    submitInstructor() {
        Axios.post("http://localhost:9000/DBcommands/registerInstructor", {
            instr_ID: this.state.ksu_id,
            instr_Name: this.state.name,
            email: this.state.email,
            password: this.state.password,
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
                        <Link
                            className="Register-submit"
                            to="/login" >
                            <span onClick={this.submitInstructor}>Register</span>
                        </Link>
                    </div>
                </header>
            </div>
        )
    }
}

export default Register;
