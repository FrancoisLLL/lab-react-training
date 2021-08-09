import React from 'react'

const Rating = (props) => {

    // let stars = Math.floor(props.children);

    let stars = "";
    for(let i= 0; i<5 ; i++)
    {
        if(i<Math.round(props.children)) 
        {
            stars += "★";
        }
        else
        {
            stars += "☆";
        }
    }

    return (
        <div>
            {stars}
        </div>
    )
}

export default Rating
