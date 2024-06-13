import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ( {  children } ) => {

    const [authState, setAuthState] = useState(null)

    return (
        <AuthContext.Provider value={{authState, setAuthState}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider