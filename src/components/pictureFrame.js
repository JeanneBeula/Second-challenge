import React, { Component } from 'react';
class PictureFrame extends Component {
    state = { 
     }
    render() { 
        const {img,title,id} = this.props
        return (
            <div className= "frame-wrapper" key = {id}>
                <div className = "image-container"><img src= {img} alt= "Miel"/></div>
                <div className = "image-label"><label> {title}</label></div>
            </div>
        );
    }
}
 
export default PictureFrame;