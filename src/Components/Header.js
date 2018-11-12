import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <header className="header">
          <h1 className="title">Notepen</h1>
          <h3 className="subtitle">The app that lets you jot things down...</h3>
        </header>
        <p className="intro">
          To get started, enter <Link className="header-link" to='/login'>here</Link>
        </p>
      </div>
    );
  }
}

export default Header;
