'use client'
import React, { createContext, useState } from 'react';

export const AppContext = createContext(null)

const MyContext = ({children}) => {
    const [state, setStates] = useState()

    const info={
        state, 
        setStates
    }
    return (
        <AppContext.Provider value={info}>
            {children}
        </AppContext.Provider>
    )
};

export default MyContext;