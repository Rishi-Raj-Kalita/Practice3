import React from "react"
import Navbar from "./Navbar"
import StateChange from "./StateChange"
import ToDo from "./ToDo"
class App extends React.Component
{
    render()
    {
        return(
            <div>
                <Navbar/>
                <div className="row">
                <StateChange/>
                <StateChange/>
                </div>
                <ToDo/>
            </div>
        )
    }
}
export default App