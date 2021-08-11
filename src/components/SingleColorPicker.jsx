import React, { Component } from 'react'


function SingleColorPicker(props) {
    return (
        <div>
                <form>
                    <input type="text" onChange = {props.cb} value={props.value} name = {props.color} />
                </form>
            </div>
    )
}

export default SingleColorPicker

