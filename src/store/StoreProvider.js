import React, { createContext, useState } from 'react';

export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
    const [movies, setMovies] = useState('')
    
    return(
        <StoreContext.Provider 
        value={{
            movies,
            setMovies,
        }}
        >
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider