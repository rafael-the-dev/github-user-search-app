import { createContext, useCallback, useEffect, useState } from 'react';

export const AppContext = createContext();
AppContext.displayName = 'AppContext';

export const AppContextProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ isUserNotFound, setIsUserNotFound ] = useState(false);
    //const isUserNotFound = useRef(false);

    const getUser = useCallback(() => user, [ user ]);

    const fetchUser = useCallback((username) => {
        fetch('https://api.github.com/users/' + username)
            .then(res => res.json())
            .then(data => { setUser(data); setIsUserNotFound(true);})
            .catch(error => {
                console.log();
                setIsUserNotFound(true);
            })
    }, []);

    useEffect(() => {
        setUser({
            avatar_url: "https://github.githubassets.com/images/modules/open_graph/github-octocat.png",
            bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.',
            created_at: 'Joined 25 Jan 2011',
            company: "@github",
            followers: 3938,
            following: 9,
            login: 'octocat',
            location: "San Francisco",
            link: "https://github.blog",
            name: 'The Octocat',
            public_repos: 8,
            twitter_username: null
        })
    }, [ ]);

    return (
        <AppContext.Provider value={{ fetchUser, getUser, isUserNotFound }}>{ children }</AppContext.Provider>
    );
};