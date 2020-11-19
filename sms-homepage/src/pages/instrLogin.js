import React, { Component } from "react";
import Axios from "axios";
import '../pagesCSS/logReg.css';
import { Link, Redirect  } from "react-router-dom";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            loginStatus: "",
        }
    this.loginInstructor = this.loginInstructor.bind(this)
}

loginInstructor() {
    Axios.post("http://localhost:9000/DBcommands/loginInstructor", {
        email: this.state.email,
        password: this.state.password,
    }).then((response) => {
        if (response.data.message) {
            this.setState({loginStatus: response.data.message});
        }
        else {
            //need to redirect to /home
        }
    });
}

    render(){
        return(
            <div>
                <header className="Login-header">
                    <div className="card">
                        <h1 className="Login-h1">Login</h1>
                        <hr/>
                        <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        <input type="Password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                        <hr/>
                        {/* <h3><Link to=''onClick={this.loginInstructor}>Login</Link></h3> */}
                        <button onClick={this.loginInstructor}>Login</button>
                        <h3><Link to='/register'>Register</Link></h3>
                    </div>
                </header>
                <h1 className="Login-h1">{this.state.loginStatus}</h1>
            </div>
        )
    }
}

export default Login;
