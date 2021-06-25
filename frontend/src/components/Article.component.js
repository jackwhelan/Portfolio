import React, { Component } from 'react';

class ArticleComponent extends Component {
    render() {
        return (
            <article className="border border-dark border-2 rounded-3 px-4 py-3 my-3">
                <header className="display-6 border-bottom border-dark p-2">{this.props.title}</header>
                <main className="p-3">{this.props.children}</main>
            </article>
        );
    }
}

export default ArticleComponent;