import React, { Component } from 'react'

export class SingleColorPicker extends Component {


    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange = {this.props.cb} value={this.props.value} name = {this.props.color} />
                </form>
            </div>
        )
    }
}

export default SingleColorPicker
