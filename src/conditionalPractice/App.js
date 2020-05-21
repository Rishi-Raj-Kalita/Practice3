import React from "react"
import LogIn from "./LogIn"
class App extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            isLogedIn:false
        }
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick()
    {
        this.setState(prevSate=>
             {
                 return{
                isLogedIn:!prevSate.isLogedIn}
            })
    }
    render()
    {
        return(
            <LogIn isLogedIn={this.state.isLogedIn} handleclick={this.handleclick}/>
        )
    }
}
export default App