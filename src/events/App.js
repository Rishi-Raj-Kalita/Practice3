import React from "react"
function Clicked()
{
    alert("i was clicked!")
}
function App()
{
    return(
        <div>
            <img src="logo192.png" alt="logo" onMouseOver={function(){console.log("someone was over me")}}></img>
            <input type="button" onClick={Clicked}></input>
        </div>
    )
}
export default App