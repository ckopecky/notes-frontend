import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <header className="header">
          <h1 id="clipped-title1"><Link to="/notes">NotePen</Link></h1>
        </header>
        <p className="intro hidden-mobile">
          To get started, enter <Link className="header-link" to='/login'>here</Link>
        </p>
        <div className="hidden-mobile navigation ">
          <h3 className="add-new-note hidden-mobile"><Link className=" link-style" to="/login">Login</Link></h3>
          <h3 className=" hidden-mobile add-new-note"><Link className="link-style" to="/register">Register</Link></h3>

          <h3 className="hidden-mobile add-new-note"><Link className="link-style" to="/create">{ `+    Add New Note`}</Link></h3>
          <h3 className="hidden-mobile add-new-note hidden-tablet"><Link className="link-style" to="/notes">View All Notes</Link></h3>
        </div>

      </div>
    );
  }
}

export default Header;
