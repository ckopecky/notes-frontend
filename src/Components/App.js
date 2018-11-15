import React, { Component } from 'react';
import '../css/index.css';
import Header from "./Header";
import NotesList from "./NotesList";
import Create from "./Create";
import Login from "./Login";
import Register from "./register";
import { Route, Switch } from 'react-router';
import Sidebar from './Sidebar';
import Accordion from './Accordion';
import Paper from '../paper.png';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="desktop-flex">
        <Sidebar className="sidebar-container"/>
        <Switch className="hidden-mobile">
          <Route exact path="/" component= {Header} img={Paper}/>
          <Route path="/notes" component={NotesList}/>
          <Route path="/create" component={Create} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
        <p className="copyright">Copyright ©2018 NotePen, LLC</p>

        </div>
        
      </div>
    );
  }
}

export default App;
