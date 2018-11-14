import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "../index.css";
import axios from 'axios';

class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("jwt");
        console.log("token from CDM", {headers: {Authorization: token}});
        let promise = axios.get(`https://notepen.herokuapp.com/api/notes`, {headers: {Authorization: token}});
        promise
            .then((response) => {
                console.log(response);
                this.setState({
                    notes: response.data
                });
            })
            .catch((error) => {
                console.error(error);
            })
        }

        handleSignOut = () => {
                localStorage.removeItem('jwt');
        
                this.props.history.push('/');
            }
        

    render() {
        console.log(this.state.notes);
        return (
                <div className="main-note-container hidden-mobile">
                    
                <div>
                {/* {
                    localStorage.getItem("jwt") && 
                    <div>
                        <div className="sign-out" onClick={this.handleSignOut}>Sign Out</div>  
                    </div>
                }
                {
                    !localStorage.getItem("jwt") &&
                    <div className="please-signin">
                        <Link className="link-style" to="/login">
                            <h1>Please Sign in to access list of notes</h1>
                        </Link>
                    </div>
                } */}
                
                <ul className="collection-of-notes hidden-mobile">
                    {this.state.notes.map(note => {
                        return(
                            <li className="indiv-note" key={note._id}>
                                <h4>title:  {note.title}</h4>
                                <p>body: {note.body}</p>
                            </li>
                        )}
                    )}
                        <div className="indiv-note">
                            <h4>Here is a sample title</h4>
                            <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                        </ul>
                        
                    </div>
                    <div className="collection-of-notes-mobile">
                        <div className="indiv-note">
                                <h4>Title</h4>
                                <p>Body</p>
                        </div>
                        <div className="indiv-note">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                    </div>
                </div>
                
        );
}}

export default NotesList;