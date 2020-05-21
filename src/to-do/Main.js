import React from "react" 
import MainContent from "./MainContent"
import list from "./List"
class Main extends React.Component
{
    constructor()
    {
        super()
        this.state={
            todos:list
        }
        this.handleChange=this.handleChange.bind(this)

    }
    handleChange(id)
    {
        this.setState(prevState => {const UpadtedArr=prevState.todos.map(todo=>{
            if(todo.id===id)
            {
                todo.completed= !todo.completed
            }
            return(todo)
        })
        return{
            todos:UpadtedArr}
        
        })
    }
    render()
    {
        const Array=this.state.todos.map(items => <MainContent handleChange={this.handleChange} key={items.id} data={items}/>)
    return(
        Array
    )
    }

}
export default Main