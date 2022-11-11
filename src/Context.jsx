import { createContext, useState } from "react";
const Context = createContext()

const sessionId = "sessionId"
const Provider = ({children}) => {
    const [isAuth,setIsAuth] = useState(() =>{
        return window.localStorage.getItem(sessionId)
    })

    const value ={
        isAuth,
        activateAuth: () =>{
            setIsAuth(true)
        }
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default {
    Provider,
    Consumer:Context.Consumer
}