import React from "react"
import Array from "./Array"
import MainFunction from "./MainFunction"
class MainClass extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            todos:Array
        }
        this.handlechange=this.handlechange.bind(this)
    }
    handlechange(id)
    {
        this.setState(prevState=>{const List=prevState.todos.map(items=>{
            if(items.id===id)
            {
                items.completed=!items.completed
            }
            return(items)
        })
        return{
            todos:List
        }
        })
    }
    render()
    {
        const UpdatedArray=this.state.todos.map(items=>
            <MainFunction  data={items} key={items.id} handleclick={this.handlechange}/>)
        return(
            <div className="UpdatedArray">
                {UpdatedArray}
            </div>
        )
    }
}
export default MainClass