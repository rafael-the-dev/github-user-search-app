import { createContext, useCallback, useEffect, useState } from 'react';

export const ThemeContext = createContext();
ThemeContext.displayName = 'ThemeContext';

export const ThemeContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState({ isLightTheme: true });
    const isLightTheme = useCallback(() => theme.isLightTheme, [ theme ]);
    const toggleTheme = useCallback(() => setTheme(theme => ({ ...theme, isLightTheme: !theme.isLightTheme})), []);


    useEffect(() => {
        if(!localStorage.getItem('github-user-search-app__isLightTheme')) {
            localStorage.setItem('github-user-search-app__isLightTheme', JSON.stringify(false));
        }
    }, []);

    useEffect(() => {
        const stringifiedTheme = localStorage.getItem('github-user-search-app__isLightTheme');
        if(stringifiedTheme) {
            const storedTheme = JSON.parse(stringifiedTheme);
            setTheme({ isLightTheme: storedTheme});
        }
    }, []);

    useEffect(() => {
        if(theme.isLightTheme) {
            document.querySelector('html').classList.add('light-theme');
            document.querySelector('html').classList.remove('dark-theme');
        } else {
            document.querySelector('html').classList.remove('light-theme');
            document.querySelector('html').classList.add('dark-theme');
        }
        localStorage.setItem('github-user-search-app__isLightTheme', JSON.stringify(theme.isLightTheme));
    }, [ theme ])

    return (
        <ThemeContext.Provider value={{ isLightTheme, theme, toggleTheme }}>{ children }</ThemeContext.Provider>
    );
}