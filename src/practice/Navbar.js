import React from "react"
class Navbar extends React.Component
{
    render()
    {
        return(
            <div className="TopNav">
                <ul>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#" className="NavRight">Login</a>
                    <a href="#" className="NavRight">Signup</a>
                </ul>
            </div>
        )
    }
}
export default Navbar