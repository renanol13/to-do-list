import { createContext } from "react";

export const ContextStorage = createContext()

export const StorageProvider = ({ children }) => {
    
 
    return (
        <ContextStorage.Provider value={{teste}}>
            {children}
        </ContextStorage.Provider>
    )
}