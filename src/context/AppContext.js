import { createContext } from 'react';

export const AppConetext = createContext();
AppConetext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    return (
        <AppConetext.Provider value={{}}>{ children }</AppConetext.Provider>
    );
};