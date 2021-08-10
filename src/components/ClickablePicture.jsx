import React, { Component } from 'react'

export class ClickablePicture extends Component {

    state = {
        src: this.props.img
    }


    changeImage = () => {
        this.setState(
            { src: this.state.src === this.props.img ? this.props.imgClicked: this.props.img }
        )
    }

    render() {
        return (
            <div >
                <img onClick={this.changeImage} src={this.state.src} alt="" />
            </div>
        )
    }
}

export default ClickablePicture
