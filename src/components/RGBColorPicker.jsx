import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'

export class RGBColorPicker extends Component {

    state = {
        r: 2,
        g: 0,
        b: 0,
    }

    callbackRGB = (event) => {

        console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${this.state.b})` }}>
                    RGB : {this.state.r}, {this.state.g}, {this.state.b}
                </div>
                <SingleColorPicker cb={this.callbackRGB} value={this.state.r} color='r' />
                <SingleColorPicker cb={this.callbackRGB} value={this.state.g} color='g' />
                <SingleColorPicker cb={this.callbackRGB} value={this.state.b} color='b' />
            </div>
        )
    }
}

export default RGBColorPicker
