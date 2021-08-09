import React from 'react'
import './../styles/BoxColor.css'
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

const BoxColor = (props) => {
    let r = props.r;
    let g = props.g;
    let b = props.b;

    let color = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div style={color} className="BoxColor">
            rgb({props.r}, {props.g}, {props.b}) < br />
            #{componentToHex(props.r)} {componentToHex(props.g)} {componentToHex(props.b)}
        </div >
    )
}

export default BoxColor
