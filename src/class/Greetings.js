import React from "react"
class Greetings extends React.Component
{
    render()
    {
        const date= new Date();
        const time= date.getHours();
        let wish;
        if(time>0&&time<12)
        {
            wish="Morning"
        }
        else if(time>12&&time<17)
        {
             wish="Evening"
        }
        else{
            wish="Night"
        }
        return(
            <div>
                <h1>Good{wish},Sir!</h1>
            </div>
        )
    }
}
export default Greetings