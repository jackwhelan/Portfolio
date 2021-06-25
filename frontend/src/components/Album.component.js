import React, { Component } from 'react';
import CardComponent from './Card.component';

class AlbumComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="album pt-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <CardComponent
                                icon="fas fa-id-card"
                                title="About Me"
                                buttonText="Learn more about me"
                                buttonLink="/about-me">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </CardComponent>
                            <CardComponent
                                icon="fas fa-graduation-cap"
                                title="Education"
                                buttonText="Find out where I learned"
                                buttonLink="/education">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </CardComponent>
                            <CardComponent
                                icon="fas fas fa-building"
                                title="Work Experience"
                                buttonText="Find out where I've worked"
                                buttonLink="/work-experience">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </CardComponent>
                            <CardComponent
                                icon="fas fa-laptop-code"
                                title="Technical Expertise"
                                buttonText="Find out what I know"
                                buttonLink="/technical-expertise">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </CardComponent>
                            <CardComponent
                                icon="fas fa-git-square"
                                title="Personal Projects"
                                buttonText="Check out my projects"
                                buttonLink="/personal-projects">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </CardComponent>
                            <CardComponent
                                icon="fas fa-address-book"
                                title="Contact Me"
                                buttonText="Get in touch with me"
                                buttonLink="/contact-me">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </CardComponent>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumComponent;