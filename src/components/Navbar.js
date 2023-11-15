import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export default function Navbar(props) {

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                </ul>
                <div>
                    <span role="button" className="badge text-bg-danger mx-1 my-1" onClick={ () => props.themeMode('danger') }> </span>
                    <span role="button" className="badge text-bg-success mx-1 my-1" onClick={ () => props.themeMode('success') }> </span>
                    <span role="button" className="badge text-bg-primary mx-1 my-1" onClick={ () => props.themeMode('primary') }> </span>
                    <span role="button" className="badge text-bg-info mx-1 my-1" onClick={ () => props.themeMode('info') }> </span>
                </div>
                <div className={`form-check mx-2 form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
                    <input className="form-check-input" onClick={ () => props.themeMode(props.mode) } type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

Navbar.propTypes = {
                     title: PropTypes.string.isRequired, 
                     aboutText: PropTypes.string, 
                     home: PropTypes.string 
                    }

Navbar.defaultProps = { 
                        title:"Set title here",
                        aboutText: "About"
                      }