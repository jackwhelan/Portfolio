import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardComponent extends Component {
    render() {
        return (
            <div className="col">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h4><i class={this.props.icon}></i> {this.props.title}</h4>
                        <p className="card-text">{this.props.children}</p>
                        <Link to={this.props.buttonLink}><button className="btn btn-secondary btn-sm" type="button">{this.props.buttonText}</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardComponent;