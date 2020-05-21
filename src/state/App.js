import React from "react"
class App extends React.Component
{
    constructor()
    {
        super()
        this.state={
            answer:"yes"
        }
    }
    render()
    {
        return(
            <div>
                <h1>Are you rishi?{this.state.answer}</h1>
            </div>
        )
    }
}
export default App