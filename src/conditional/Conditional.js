import React from "react"
function conditional(props)
{
    if(props.isLoading===true)
    {
        return(
            <h1>is Loading.......</h1>
        )
    }
    else 
    {
        return(
            <h1>welcome to some cool stuff.....</h1>
        )
    }

}
export default conditional