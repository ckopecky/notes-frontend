import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="header">
          <h1 id="clipped-title1"><Link to="/notes">NotePen</Link></h1>
        </header>
        <div className="button-header-container">
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
          <div className="register"><Link to="/register">Register</Link>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
