import React from "react"
function LogIn(props)
{
    return(
        <div>
        {props.isLogedIn===true?<h1>Loged in!</h1>:<h2>Not Loged in!</h2>}
        <button onClick={props.handleclick}>Log In</button>
        </div>
    )

}
export default LogIn