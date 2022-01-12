import { Avatar, Button, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { useBackground, useDisplay, useTypography } from '../../styles';
import classNames from 'classnames';
import { useStyles } from './styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LinkIcon from '@mui/icons-material/Link';
import { useCallback, useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { ThemeContext } from '../../context/ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';

const Home = () => {
    const bg = useBackground();
    const display = useDisplay();
    const classes = useStyles();
    const text = useTypography();

    const { fetchUser } = useContext(AppContext);
    const { isLightTheme, toggleTheme } = useContext(ThemeContext)
    const inputRef = useRef(null);

    const submitHandler = useCallback(event => {
        event.preventDefault();
        fetchUser(inputRef.current.value)
    }, [ fetchUser ]);
    //console.log()

    return (
        <div className={classNames(display.alignStretch, display.flex, display.flexColumn, display.px, display.pt1,
            display.pb2, classes.main, 'theme-main-bg')}>
            <header className={classNames(display.alignCenter, display.flex, display.justifyBetween, display.w100)}>
                <Typography 
                    className={classNames(text.font7, 'theme-text')}
                    component="h1" 
                    variant="h5">
                    devfinder
                </Typography>
                <Button 
                    onClick={toggleTheme}
                    endIcon={ isLightTheme() ? <DarkModeIcon /> : <LightModeIcon />} 
                    className={classNames(classes.lightText, text.font7, 'theme-text')}>
                    { isLightTheme() ? 'Dark' : 'Light' }
                </Button>
            </header>
            <main className={classNames(display.pt2)}>
                <Paper component="form" className={classNames(display.alignCenter, display.flex, classes.px, 
                    classes.defaultBorderRadius, classes.form, 'theme-background-color')}
                    onSubmit={submitHandler}>
                    <IconButton>
                        <SearchIcon classes={{ root: classNames(classes.blueText)}} />
                    </IconButton>
                    <input 
                        className={classNames(display.borderNone, display.flexGrow1, display.outlineNone, 
                        classes.lightText, bg.transparent, 'theme-text')}
                        placeholder="Search GitHub username…"
                        ref={inputRef}
                    />
                    <Button 
                        type="submit"
                        className={classNames(classes.formSearchButton, text.rem75)}
                        variant="contained">
                        Search
                    </Button>
                </Paper>
                <Paper className={classNames(display.mt2, classes.px, classes.defaultBorderRadius, display.pt1, 
                    display.pb2, 'theme-background-color')}>
                    <div className={classNames(display.alignCenter, display.flex)}>
                        <Avatar
                            classes={{ root: classNames(classes.avatarRoot)}}
                            src="https://github.githubassets.com/images/modules/open_graph/github-octocat.png"
                            alt="profile"
                        />
                        <div className={classNames(display.flex, display.flexColumn, display.ml1)}>
                            <Typography 
                                component="h2" 
                                variant="h6" 
                                className={classNames(text.font7, classes.dark1Text, 'theme-text')}>
                                The Octocat
                            </Typography>
                            <Typography 
                                gutterBottom 
                                className={classNames(text.rem9, classes.blueText)}>
                                @octocat
                            </Typography>
                            <Typography variant="body2" className={classNames(classes.lightText, 'theme-text')}>
                                Joined 25 Jan 2011
                            </Typography>
                        </div>
                    </div>
                    <Typography variant="body2" className={classNames(display.mt2, text.rem9, classes.lightText, 'theme-text')}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    </Typography>
                    <div className={classNames(display.flex, display.justifyBetween, display.mt2, classes.panel,
                        'theme-sub-background-color')}>
                        <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                            <span className={classNames(classes.lightText, 'theme-text')}>Repos</span>
                            <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text, 'theme-text')}>8</span>
                        </Typography>
                        <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                            <span className={classNames(classes.lightText, 'theme-text')}>Followers</span>
                            <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text, 'theme-text')}>3938</span>
                        </Typography>
                        <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                            <span className={classNames(classes.lightText, 'theme-text')}>Following</span>
                            <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text, 'theme-text')}>9</span>
                        </Typography>
                    </div>
                    <List  disablePadding className={classNames(display.mt2)}>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText 
                                classes={{ primary: text.rem9}} 
                                className={classNames(classes.lightText, 'theme-text')} 
                                primary="San Francisco" 
                            />
                        </ListItemButton>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                <LinkIcon />
                            </ListItemIcon>
                            <ListItemText 
                                classes={{ primary: text.rem9}} 
                                className={classNames(classes.lightText, 'theme-text')} 
                                primary="https://github.blog" 
                            />
                        </ListItemButton>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText 
                                classes={{ primary: text.rem9}} 
                                className={classNames(classes.lightText, 'theme-text')} 
                                primary="Not Available" 
                            />
                        </ListItemButton>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                <ApartmentIcon />
                            </ListItemIcon>
                            <ListItemText 
                                classes={{ primary: text.rem9}} 
                                className={classNames(classes.lightText, 'theme-text')} 
                                primary="@github" 
                            />
                        </ListItemButton>
                    </List>
                </Paper>
            </main>
        </div>
    )
};

export default Home;