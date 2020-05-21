import React from "react"
import productsData from "./productData"
import Data from "./products"
function App()
{
    const AllProducts=productsData.map(function(items)
    {
        return(
            <Data data={items}/>
        )
    })
    return(
        AllProducts
    )
}
export default App