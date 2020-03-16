import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

class Navbar extends React.Component{
  render(){
    return (
        <nav className="navbar navbar-expand-sm bg-warning navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/formupload">Upload</a>
                </li>
            </ul>
      </nav>
        )
  }
}

export default Navbar;