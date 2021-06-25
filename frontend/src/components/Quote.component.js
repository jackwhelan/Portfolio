import React, { Component } from 'react';

class QuoteComponent extends Component {
    render() {
        return (
            <figure>
                <blockquote class="blockquote">
                    <p>{this.props.children}</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title">{this.props.quotee}</cite>
                </figcaption>
            </figure>
        );
    }
}

export default QuoteComponent;