import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmedPassword: "",
        }


    }

    handleChange = (e) => {

        this.setState({[e.target.name]: e.target.value});
    }

    handleClick = (e) => {
        let promise = axios.post("https://notepen.herokuapp.com/auth/register", this.state);

        promise 
            .then(response => {
                console.log("response", response);
                localStorage.setItem("jwt", response.data.token);
                this.props.history.push("/login");
            })
            .catch(err => {
                console.log("error from handleClick", err);
            });
    }

    render() {
        console.log(this.state);

        return (
            <div className="login-wrapper">
                    <h1 className="login_here">Register Here</h1>
                    <div className="input_container">
                    <div className="input_credentials">
                        <label>Username: </label>
                        <input name="username" value={this.state.username}onChange={this.handleChange}className="input_box" type="text" required/>
                    </div>
                    <div className="input_credentials">
                        <label>First Name: </label>
                        <input onChange={this.handleChange} name="firstName" value={this.state.firstName}className="input_box" type="text" required/>
                    </div>
                    <div className="input_credentials">
                        <label>Last Name: </label>
                        <input onChange={this.handleChange} name="lastName" value={this.state.lastName}className="input_box" type="text" required/>
                    </div>
                    <div className="input_credentials">
                        <label>Password: </label>
                        <input onChange={this.handleChange} name="password" value={this.state.password}className="input_box" type="password" required/>
                    </div>
                    <div className="input_credentials">
                        <label>Confirm Password: </label>
                        <input onChange={this.handleChange} name="confirmedPassword" value={this.state.confirmedPassword} className="input_box" type="password" required/>
                    </div>
                    <p className="register_login">{` Already have an account? Log in `}  <Link className="link-header" to='/login'><br/>
                    here</Link></p>
                    <div className="button-submit" onClick={this.handleClick}>Submit</div>
                    </div>
                </div>
        );
    }
}

export default Register;