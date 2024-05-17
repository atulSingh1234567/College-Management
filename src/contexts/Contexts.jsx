import { createContext,useContext,useState } from "react";

const AllContexts = createContext();

export const AllContextsProvider = ({children})=>{
    const [mainAdmin,setMainAdmin] = useState({});
    const [anyError, setAnyError] = useState({})
    const [student , setStudent] = useState([])
    const [job,setJob] = useState([])
    const [imgURL , setimgURL] = useState('')
    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      };
    
      const eraseCookie = (name) => {
        document.cookie = name + '=; Max-Age=-99999999;';
      };
    return <AllContexts.Provider value={{mainAdmin,eraseCookie,job,setJob,imgURL,setimgURL , student, setStudent , setMainAdmin, anyError, setAnyError, getCookie}}>
           {children}
    </AllContexts.Provider>
}

export const useAllContexts = ()=>{
    return useContext(AllContexts);
}
