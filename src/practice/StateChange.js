import React from "react"
class StateChange extends React.Component
{
    constructor()
    {
        super()
        this.state={
            count:0
        }
        this.handleClick=this.handleClick.bind(this)
        this.handleClick2=this.handleClick2.bind(this)
        this.handleClick3=this.handleClick3.bind(this)
    }
    handleClick()
    {
        this.setState(prevState=>{
            return{
            count:prevState.count+1
            }
        })
    }
    handleClick2()
    {
        this.setState(prevState=>{
            return{
                count:prevState.count/2
            }
        })

    }
    handleClick3()
    {
        this.setState((prevState)=>
        {
            return{
                count:0
            }
        })
    }
    render()
    {
        return(
            <div className="col-5">
             <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>IncreaseMe</button>
            <button onClick={this.handleClick2}>MakemeHalf</button>
            <button onClick={this.handleClick3}>MakemeZero</button>

            </div>
        )
    }
}
export default StateChange