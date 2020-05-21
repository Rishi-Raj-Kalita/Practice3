import React from "react"
function Opp(props)
{
    return(
        <div>
            <h2 style={{display:props.word?"block":"none"}} >Word={props.word}</h2>
            <h2>Opposite={props.opposite}</h2>
        </div>
    )
}
export default Opp