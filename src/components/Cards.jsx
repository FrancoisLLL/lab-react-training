import React from 'react'
import './../styles/Cards.css'
const Cards = (props) => {
    return (
        <div className="Cards">
            {props.children}
        </div>
    )
}

export default Cards
