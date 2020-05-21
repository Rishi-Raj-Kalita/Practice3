import React from "react"
import Header from "./Header"
import MainClass from "./MainClass"
class ToDo extends React.Component
{
    render()
    {
        return(
            <div>
                <Header/>
                <div className="row">
                <MainClass/>
                </div>
            </div>
        )
    }
}
export default ToDo