import React from "react"
class App extends React.Component
{
    constructor()
    {
        
        super()
        this.state={
            firstName:"",
            lastName:"",
            isFriendly:"true",
            gender:"",
            favColor:"blue"
        }
        this.handlechange=this.handlechange.bind(this)
    }
    handlechange(events)
    {
       const {name,value,type,checked}=events.target
       type==="checkbox"?this.setState({[name]:checked}):this.setState({[name]:value})
    }
    render()
    {
        return(
            <form>
            <input type="text" value={this.state.firstName}     name="firstName" placeholder="firstName" onChange={this.handlechange}/>
            <br/>
            <input type="text" value={this.state.lastName} name="lastName" placeholder="lastName" onChange={this.handlechange}/>
             <input type="checkbox" name="isFriendly"  checked={this.state.isFriendly} onChange={this.handlechange}/>
             <label>
             <input type="radio" name="gender" value="male"  checked={this.state.gender==="male"} onChange={this.handlechange}/>
             </label>Male 
             <label>
             <input type="radio" name="gender" value="female"  checked={this.state.gender==="female"} onChange={this.handlechange}/>
             </label>Female 
             <select name="favColor" value={this.state.favColor} onChange={this.handlechange}>
             <option value="blue">Blue</option>
             <option value="red">Red</option>
             <option value="green">Green</option>
             </select>
             <h1>yoy are {this.state.gender}</h1>
             <h1>{this.state.firstName} {this.state.lastName} </h1>
             <h1>you favourite color is {this.state.favColor}</h1>
            </form>
        )
    } 
}
export default App