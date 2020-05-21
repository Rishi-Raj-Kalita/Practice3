import React from "react"
class AndOperator extends React.Component
{
    constructor()
    {
        super()
        this.state={
            unreadMessages:["hello"]
        }
    }
    render()
    {
        return(
            this.state.unreadMessages.length>0 &&
            <h1>you have {this.state.unreadMessages.length} unread messages!</h1>
        )
    }
}
export default AndOperator