import React from "react"
class App extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:"rishi",
            age:20
        }
    }
    render()
    {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <h1>You are {this.state.age} years old</h1>
            </div>
        )
    }
}
export default App