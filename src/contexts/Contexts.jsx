import { createContext,useContext,useState } from "react";

const AllContexts = createContext();

export const AllContextsProvider = ({children})=>{
    const [mainAdmin,setMainAdmin] = useState({});
    const [anyError, setAnyError] = useState({})

    return <AllContexts.Provider value={{mainAdmin , setMainAdmin, anyError, setAnyError}}>
           {children}
    </AllContexts.Provider>
}

export const useAllContexts = ()=>{
    return useContext(AllContexts);
}
