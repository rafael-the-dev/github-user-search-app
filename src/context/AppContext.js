import { createContext, useCallback, useEffect, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ isUserNotFound, setIsUserNotFound ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    //const isUserNotFound = useRef(false);

    const getUser = useCallback(() => user, [ user ]);

    const fetchUser = useCallback((username) => {
        setIsLoading(true);
        fetch('https://api.github.com/users/' + username)
            .then(res => res.json())
            .then(data => { 
                if(data.message === 'Not Found') {
                    setIsUserNotFound(true);
                }  else {
                    setIsUserNotFound(false);
                }
                
                setUser(data); 
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsUserNotFound(true);
                setIsLoading(false);
            })
    }, []);

    useEffect(() => {
        setUser({
            avatar_url: "https://github.githubassets.com/images/modules/open_graph/github-octocat.png",
            bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
            created_at: 'Joined 25 Jan 2011',
            company: "github",
            followers: 3938,
            following: 9,
            login: 'octocat',
            location: "San Francisco",
            html_url: "https://github.blog",
            name: 'The Octocat',
            public_repos: 8,
            twitter_username: null
        });
        setIsUserNotFound(false);
        setIsLoading(false);
    }, [ ]);

    return (
        <AppContext.Provider value={{ fetchUser, getUser, isLoading, isUserNotFound }}>{ children }</AppContext.Provider>
    );
};