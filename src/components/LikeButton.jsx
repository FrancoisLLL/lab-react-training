import React, { Component } from 'react'
import "./../styles/LikeButton.css"

export class LikeButton extends Component {

    state = {
        clicks : 0,
    }

    increment = () => {
        this.setState({
            clicks: this.state.clicks + 1, 
          }, () => {
              console.log(this.state.clicks)
          });
    }

    render() {
        const bgColors = ['purple','blue','green','yellow','orange','red'];

        let bgColor = bgColors[this.state.clicks%6]

        const style= {
            backgroundColor : bgColor
        }

        return (
            <div onClick = {this.increment} className = "LikeButton" style = {style}>
                {this.state.clicks} Likes
            </div>
        )
    }
}

export default LikeButton
