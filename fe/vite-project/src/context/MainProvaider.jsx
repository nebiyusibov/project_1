import { createContext, useState } from "react"

export const MainContext=createContext()

function MainProvaider({children}) {
    const [basket,setbasket]=useState([])

    function addBasket(item) {
        setbasket([...basket,item])
    }

    function deleteBasketCard(item) {
        setbasket(basket.filter((x)=>x._id !== item._id))
    }
  return (
    <MainContext.Provider value={{addBasket,basket,deleteBasketCard}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainProvaider