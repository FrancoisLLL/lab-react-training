import React from 'react'

const Random = (props) => {
    return (
        <div>
            {Math.floor(Math.random() * (props.max - props.min) + props.min)}
        </div>
    )
}

export default Random
