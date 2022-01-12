import { createContext, useCallback, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const [ user, setUser ] = useState({});

    const fetchUser = useCallback((username) => {
        fetch(`​https://api.github.com/users/${username}`)
            .then(res => console.log(res))
            //.then(data => console.log(data))
            .catch(console.log)
    }, [])
    return (
        <AppContext.Provider value={{ fetchUser, user }}>{ children }</AppContext.Provider>
    );
};