import React from "react"
function MainFunction(props)
{
    return(
         <div className="row">
             <input type="checkbox" checked={props.data.completed}  onChange={()=>props.handleclick(props.data.id)}></input>
             <h1>{props.data.work}</h1> 
         </div>
    )
}
export default MainFunction