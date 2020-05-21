import React from "react"
import Opp from "./Opp"
import WordOpp from "./WordOpp"
function App()
{
   const NewWordOpp=WordOpp.map(function(jokes)
   {
     return(
      <Opp
      word={jokes.first}
      opposite={jokes.second} 
      />
     )
   })
   return(
      NewWordOpp
   )
}
export default App