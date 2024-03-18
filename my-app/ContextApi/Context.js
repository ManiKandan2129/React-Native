import React, { createContext, useState } from 'react'


const Context = createContext();




function ContextData({ children }) {

    const[menu, setmenu] = useState("close");
    

  return (
    <Context.Provider value={{menu, setmenu}}>
        { children }
    </Context.Provider>
  )
}

export {Context, ContextData};