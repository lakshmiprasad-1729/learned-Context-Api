import React ,{useState} from "react";

const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
function ContextProvider({children}){
     const [data,setData] = useState(null)
     return (
        <UserContext.Provider value={{data,setData}}>
        {children}
        </UserContext.Provider>
     )
}

export {UserContext,ContextProvider}