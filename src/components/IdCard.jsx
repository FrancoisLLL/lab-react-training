import React from 'react'
import './../styles/IdCard.css'

const IdCard = (props) => {
    return (
        <div className="IdCard-flex">
            <img src={props.picture} alt="" />
            <div>
                <p><span className="IdCard-span">Last name: </span>{props.lastName}</p>
                <p><span className="IdCard-span">First name: </span>{props.firstName}</p>
                <p><span className="IdCard-span">Gender: </span>{props.gender}</p>
                <p><span className="IdCard-span">Height: </span>{props.height}</p>
                <p><span className="IdCard-span">Birth: </span>{props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard
