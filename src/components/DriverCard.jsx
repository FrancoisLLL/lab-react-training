import React from 'react'
import Rating from './Rating.jsx'
import './../styles/DriverCard.css'
const DriverCard = (props) => {
    return (
        <div class="DriverCard">
            <img src={props.img} alt="" />
            <div class = "DriverCard-details">
                <p>{props.name}</p>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
