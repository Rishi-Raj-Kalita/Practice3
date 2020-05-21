import React from "react"
function Data(props)
{
    return(
        <div>
        <h1>{props.data.name}</h1>
        <h2>{props.data.company}</h2>
        <h3>{props.data.price}</h3>
        </div>
    )
}
export default Data

