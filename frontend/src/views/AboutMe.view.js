import React, { Component } from 'react';
import Navigation from '../components/Navigation.component';
import ArticleComponent from '../components/Article.component';

class AboutMeView extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div className="container">
                    <ArticleComponent title="Quick Basic Info" date={new Date().toUTCString()}>
                    Name <input className="form-control mb-4" type="text" value="Jack Whelan" readOnly/>
                    Date of Birth <input className="form-control mb-4" type="text" value="24th September 1997" readOnly/>
                    Employment Status <input className="form-control mb-4" type="text" value="Full Time Software Engineer at Ericsson" readOnly/>
                    Nationality <input className="form-control mb-4" type="text" value="Irish" readOnly/>
                    Location <input className="form-control mb-4" type="text" value="Dublin, Ireland." readOnly/>
                    Education <input className="form-control mb-4" type="text" value="BSc. (Hons) Computer Science (Infrastructure) - 1st Class Honours" readOnly/>
                    Contact <input className="form-control mb-4" type="text" value="JAWhelan@outlook.ie" readOnly/>
                    </ArticleComponent>
                </div>
            </div>
        );
    }
}
 
export default AboutMeView;