import React from "react"
class App extends React.Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick()
    {
        this.setState(
            function(prevState)
            {
                
                return{count: prevState.count+1}
            }
        )
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <input type="button" onClick={this.handleClick}></input>
            </div>
        )
    }
}
export default App