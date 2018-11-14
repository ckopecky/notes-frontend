import React, { Component } from 'react';
import axios from 'axios';
import "../index.css";
import uuidv4 from 'uuid/v4';

    // const token = localStorage.getItem("jwt")
    // const requestOptions = {
    // headers: {
    //     Authorization: token
//     // }
// }



class Create extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title:'',
            content:'',
            id : uuidv4()
        }
    }
    handleChange = (e) => { //works
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = () => { //works
        axios.post("https://notepen.herokuapp.com/api/notes/", this.state)
            .then(response => {
                this.props.history.push("/notes");
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    render() {
        console.log(this.state);
        return (
            <div className="create-note-app-page">
                <div className="main-form-container">
                    <div className="create-note-wrapper">
                            <h3 className="create-header">Create a New Note:</h3>
                            <div className="new-note-wrapper">
                                <div>
                                    <label className="label-title">Note Title:</label>
                                    <input className= "input_box note-title" placeholder="note title" onChange={this.handleChange} name="title" type="text-area"value={this.state.title}/>
                                </div>
                                <div className="new-note-wrapper">
                                    <label className="label-body">Note Body:</label>
                                    <textarea className="input_box note-body" placeholder="note content" onChange={this.handleChange} name="content" type="text-area" value={this.state.content}/>
                                </div>
                                <div className="button-submit" onClick={this.handleClick}>Save</div>
                            </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default Create;