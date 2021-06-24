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
                                <Link className="nav-link" to="/about-me"><i class="fas fa-id-card"></i> About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/education"><i class="fas fa-graduation-cap"></i> Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/work-experience"><i class="fas fa-building"></i> Work Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technical-expertise"><i class="fas fa-laptop-code"></i> Technical Expertise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/personal-projects"><i class="fab fa-git-square"></i> Personal Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-me"><i class="fas fa-address-book"></i> Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;