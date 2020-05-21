import React from "react"
function Wish()
{
    const date= new Date();
    const getTime=date.getHours();
    let time
    if(getTime<12)
    {
        time="morning";
    }
    else if(getTime>=12 && getTime<=17)
    {
        time="afternooon";
    }
    else
    {
        time="night";
    }
    return(<h1>Good {time}!</h1>)
}
export  default Wish