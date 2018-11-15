import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/index.css";
import axios from 'axios';

class NotesMobile extends Component {
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
                <div className="main-note-container">
                    <div className="collection-of-notes-mobile">
                        <div className="indiv-note-mobile">
                                <h4>Here is a sample title</h4>
                                <p>Timey-wimey-wibbly-wobbly.....Stuff</p>
                        </div>
                        <div className="indiv-note-mobile">
                            <h4>Title</h4>
                            <p>Body</p>
                        </div>
                    </div>
                </div>
                
        );
}}

export default NotesMobile;