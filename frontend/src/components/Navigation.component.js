import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    state = {

    }
    render() {
        return (
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <div className="container container-fluid">
                    <Link className="navbar-brand font-family-cursive" to="/">Jack Whelan</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-me">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/education">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/work-experience">Work Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technical-expertise">Technical Expertise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/personal-projects">Personal Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-me">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;