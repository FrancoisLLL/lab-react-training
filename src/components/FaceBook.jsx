import profiles from './../data/berlin.json';

import React, { Component } from 'react'


export class FaceBook extends Component {

    state = {
        profiles : [...profiles]
    }

    colorBackground = (event) => {
        console.log(event.target.innerHTML)
        const newArray = this.state.profiles.map(item => {

            let style = {}
            
            if(item.country === event.target.innerHTML) 
            {
                 style = {
                    backgroundColor: "blue"
                }
            }
            console.log(style);

            return <li className="IdCard-flex" key={item.lastName} style = {style}>
                <img src={item.img} alt="" />
                <div>
                    <p><span className="IdCard-span">Last name: </span>{item.lastName}</p>
                    <p><span className="IdCard-span">First name: </span>{item.firstName}</p>
                </div>
            </li>
        })

        console.log(newArray)
    }

    render() {

        const newArray = this.state.profiles.map(item => {
            return <li className="IdCard-flex" key={item.lastName}>
                <img src={item.img} alt="" />
                <div>
                    <p><span className="IdCard-span">Last name: </span>{item.lastName}</p>
                    <p><span className="IdCard-span">First name: </span>{item.firstName}</p>
                </div>
            </li>
        })

        return (
            <>
            <ul>
                <button onClick={this.colorBackground}>
                    Hello
                </button>
                <button onClick={this.colorBackground}>
                    USA
                </button>
                <button onClick={this.colorBackground}>
                    France
                </button>
            </ul>
            <ul>
                {newArray}
            </ul >
            </>
        )
    }
}

export default FaceBook
