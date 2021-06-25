import React, { Component } from 'react';
import me from '../style/me.png';

class PhotoComponent extends Component {
    render() {
        return (
            <img className="img-thumbnail" alt="Me :)" src={me}/>
        );
    }
}
 
export default PhotoComponent;