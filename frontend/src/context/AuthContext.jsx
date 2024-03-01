import { createContext, useContext } from "react";
import toast from "react-hot-toast";

export const AuthContext =createContext();

export const useAuthContext =()=>{
    return useContext(AuthContext);
}
export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        const checkUserLogged=async()=>{
            setLoading(true);
            try {
                const res=await fetch("/api/auth/check",{credentials:"include"});
                const data=await res.json();
                setAuthUser(data.user);
                
            } catch (error) {
                toast.error(error.message);
            }
        }
        checkUserLogged();
    },[])
    return(
    <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>
)}
