import React from "react"
import Conditional from "./Conditional"
import AndOperator from "./AndOperator"
class App extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            isLoading:true
        }
    }
    componentDidMount()
    {
        setTimeout(
            ()=>{
                this.setState(
                    {isLoading:false}
                )
            },1500)
    }
    render()
    {
        return(
            <div>
            <Conditional isLoading={this.state.isLoading}/>
            <AndOperator/>
            </div>
        )
    }
}
export default App