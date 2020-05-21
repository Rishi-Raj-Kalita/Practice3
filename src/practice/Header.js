import React from "react"
class Header extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:"Rishi"
        }
    }
    render()
    {

    return(
            <div className="Header">
                <h1>Hello {this.state.name} to your To-DO list </h1>
            </div>
        )
    }
            
}
export default Header

