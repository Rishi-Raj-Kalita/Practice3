import React from "react"
function MainContent (props)
{
    const completedStyle=
    {
        textDecoration:"line-through",
        color:"black"
        
    }
    return(
        <div className="Main">
            <input type="checkbox" checked={props.data.completed} onChange={function(){(props.handleChange(props.data.id))}}></input>
        <h1 style={props.data.completed?completedStyle:null}>{props.data.work}</h1>
        </div>
    )
}
export default MainContent