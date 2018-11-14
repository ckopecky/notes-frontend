import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }



    handleChange = (e) => {

        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = (e) => {
        const token = localStorage.getItem("jwt");
        console.log(token);
        let promise = axios.post("https://notepen.herokuapp.com/auth/login", this.state, token);

        promise 
            .then(response => {
                console.log("response", response);
                if({headers: {Authorization: token}}){
                    this.props.history.push("/notes");
                }
                
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="login-wrapper">
                <h1 className="login_here">{this.props.title}</h1>
                <div className="input_container">
                    <div className="input_credentials">
                        <label>Username: </label>
                        <input onChange={this.handleChange} name= "username" value={this.state.username} className="input_box" type="text" required/>
                    </div>
                    <div className="input_credentials">
                        <label>Password: </label>
                        <input onChange={this.handleChange} name="password" value={this.state.password}className="input_box" type="password" required/>
                    </div>
                    <p className="register_login">No account?  <br/><Link className="link-header" to='/register'>Register here</Link></p>
                    <div onClick={this.handleClick} className="button-submit">Submit</div>
                </div>
            </div>
        );
    }
}

export default Login;