import React from "react"
function Form(props)
{
    console.log(props)
    return(
          <div>
          <h1>{props.contact.name}</h1> 
          <h1>{props.contact.age}</h1>
          <h1>{props.contact.gender}</h1>
          </div> 
      )
}
export default Form