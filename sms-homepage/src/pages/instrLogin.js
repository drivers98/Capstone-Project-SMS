import React, { Component } from "react";
import Axios from "axios";
import {Button, Modal } from "react-bootstrap";
import '../pagesCSS/logReg.css';
import { Link } from "react-router-dom";


class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            KSU_ID: "",
            email: "",
            password: "",
            loginStatus: "",
            show: false,
        }
        this.loginInstructor = this.loginInstructor.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleShow = this.handleShow.bind(this)
    }

    handleClose() { this.setState({ show: false }) }
    handleShow() { this.setState({ show: true }); }

    loginInstructor() {
        Axios.post("http://localhost:9000/DBcommands/loginInstructor", {
            email: this.state.email,
            password: this.state.password,
        }, { withCredentials: true }).then((response) => {
            if (response.data.message) {
                this.setState({ loginStatus: response.data.message });
                this.handleShow();
            }
            else {
                this.props.history.push('/home')
            }
        });

    }

    componentDidMount() {
        Axios.defaults.withCredentials = true;

        Axios.get("http://localhost:9000/DBcommands/loginInstructor",).then((response) => {
            if (response.data.loggedIn) {
                this.props.history.push('/home')
            }
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <header className="Login-header">
                    <label>{this.name}</label>
                    <div className="card">
                        <h1 className="Login-h1">Login</h1>
                        <hr />
                        <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        <input type="Password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                        <hr />
                        {/* <h3><Link to=''onClick={this.loginInstructor}>Login</Link></h3> */}
                        <Button onClick={this.loginInstructor}>Login</Button>
                        <h3><Link to='/register'>Register</Link></h3>
                    </div>
                </header>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Login Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2 className="Login-h1">{this.state.loginStatus}</h2>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
// function Login() {
//     const [name, setName] = useState("");
//     const [KSU_ID, setKSU_ID] = useState(""); 
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loginStatus, setLoginStatus] = useState("");

//     Axios.defaults.withCredentials = true;

//     const loginInstructor = () => {
//         Axios.post("http://localhost:9000/DBcommands/loginInstructor",{
//             email: email,
//             password: password,
//         }, { withCredentials: true }).then((response) => {
//             if (response.data.message) {
//                 setLoginStatus(response.data.message);
//             }
//             else {
//                 // this.props.history.push('/home')
//             }
//         });
//     };

//     useEffect(()=> {
//         Axios.get("http://localhost:9000/DBcommands/loginInstructor",).then((response) => {
//             //  this.setState({name: response.data.user[0].Name})
//             //  this.setState({email: response.data.user[0].Email})
//             //  this.setState({KSU_ID: response.data.user[0].Instructor_ID})
//             console.log(response);
//         })
//     }, []);

//     return(
//         <div>
//             <header className="Login-header">
//                 <div className="card">
//                     <h1 className="Login-h1">Login</h1>
//                     <hr/>
//                     <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//                     <br />
//                     <input type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                     <hr/>
//                     {/* <h3><Link to=''onClick={this.loginInstructor}>Login</Link></h3> */}
//                     <button onClick={loginInstructor}>Login</button>
//                     <h3><Link to='/register'>Register</Link></h3>
//                 </div>
//             </header>
//             <h1 className="Login-h1">{loginStatus}</h1>
//         </div>
//     )
// }


export default Login;
