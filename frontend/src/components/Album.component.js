import React, { Component } from 'react';

class AlbumComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h4><i class="fas fa-id-card"></i> About Me</h4>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        <button className="btn btn-secondary btn-sm" type="button">Learn more about me</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h4><i class="fas fa-graduation-cap"></i> Education</h4>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        <button className="btn btn-secondary btn-sm" type="button">Find out where I learned</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h4><i class="fas fa-building"></i> Work Experience</h4>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        <button className="btn btn-secondary btn-sm" type="button">Find out where I've worked</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h4><i class="fas fa-laptop-code"></i> Technical Expertise</h4>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        <button className="btn btn-secondary btn-sm" type="button">Find out what I know</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h4><i class="fab fa-git-square"></i> Personal Projects</h4>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        <button className="btn btn-secondary btn-sm" type="button">Check out my projects</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <h4><i class="fas fa-address-book"></i> Contact Me</h4>
                                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        <button className="btn btn-secondary btn-sm" type="button">Get in touch with me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumComponent;