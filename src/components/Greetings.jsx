import React from 'react'

const Greetings = (props) => {
    let greetings = "";
    switch (props.lang) {
        case "fr":
            greetings = "Bonjour";
            break;
        case "en":
            greetings = "Hello";
            break;
        case "de":
            greetings = "Hallo";
            break;
        case "es":
            greetings = "Ola";
            break;
        default:
            greetings = "Hello"
            break;
    }
    return (
        <div>
            {greetings} {props.children}
        </div>
    )
}

export default Greetings
