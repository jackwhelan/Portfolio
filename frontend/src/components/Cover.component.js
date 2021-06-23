import React, { Component } from 'react';

class CoverComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="p-5 bg-light rounded-3">
                    <div className="container-fluid py-4">
                        <h1 className="display-5 fw-bold">Hi There,</h1>
                        <p className="col-md-8 fs-4">My name is Jack. I'm a Software Engineer (by title) but it only describes one of the many technical roles that I can take on.</p>
                        <button className="btn btn-secondary btn-lg" type="button">Learn more</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CoverComponent;