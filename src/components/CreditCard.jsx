import React from 'react'
import './../styles/CreditCard.css'
const CreditCard = (props) => {

    let source = props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"

    let style = {
        backgroundColor : `${props.bgColor}`,
        color: `${props.color}`
    }

    let month= props.expirationMonth.length > 1 ? props.expirationMonth: '0'+ props.expirationMonth;
    let year = props.expirationYear.toString().substr(-2);

    let number = "•••• •••• •••• " + props.number.toString().substr(-4);

    console.log(number);
    return (
        <div className="CreditCard" style={style}>
            <div className="CreditCard-type">
                <img src={source} alt='' />
            </div>
            <p className="CreditCard-number">{number}</p>
            <p>{month}/{year}  {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard
