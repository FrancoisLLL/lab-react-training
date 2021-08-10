import React from 'react'

const NumbersTable = (props) => {

    const table = [];

    // const style = {
    //     border: "1px solid black",
    //     width: "100px",
    //     height: "100px",
    //     backgroundColor: "red"
    // }

    for (let i = 0; i < props.limit; i++) {

        // let bgColor = i%2    === 0 ? "red" : "white"

        table.push(
            <div key={i} style={{
                border: "1px solid black",
                width: "100px",
                height: "100px",
                backgroundColor: i%2 === 0 ? "red" : "white"
            }}>
                {i+1}
            </div>
        )
    }

    console.log(table);

    return (
        <div style = {{display : "flex", flexWrap : "wrap"}}>
            {table}
        </div>
    )
}

export default NumbersTable
