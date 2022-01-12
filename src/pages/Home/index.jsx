import { Avatar, Button, Hidden, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { useBackground, useDisplay, useResponsive, useTypography } from '../../styles';
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
import moment from 'moment';

const Home = () => {
    const bg = useBackground();
    const classes = useStyles();
    const display = useDisplay();
    const responsive = useResponsive();
    const text = useTypography();

    const { fetchUser, getUser } = useContext(AppContext);
    const { isLightTheme, toggleTheme } = useContext(ThemeContext)
    const inputRef = useRef(null);

    const submitHandler = useCallback(event => {
        event.preventDefault();
        fetchUser(inputRef.current.value)
    }, [ fetchUser ]);
    //console.log()

    const validator = useCallback((success, failure) => Boolean(getUser()) ? success : failure, [ getUser ]);
    const getJoinedDate = useCallback(stringifiedDate => {
        const date = moment(stringifiedDate).format("DD MMM YYYY");
        return date;
    }, []);

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
                        classes.lightText, bg.transparent, 'theme-text', classes.input)}
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
                    display.pb2, 'theme-background-color', display.flex)}>
                    <Hidden mdDown>
                        <Avatar
                            classes={{ root: classNames(classes.avatarRoot)}}
                            src={ getUser().avatar_url}
                            alt="profile"
                        />
                    </Hidden>
                    <div>
                        <div className={classNames(display.alignCenter, display.flex)}>
                            <Hidden mdUp>
                                <Avatar
                                    classes={{ root: classNames(classes.avatarRoot)}}
                                    src={ getUser().avatar_url}
                                    alt="profile"
                                />
                            </Hidden>
                            <div className={classNames(display.flex, display.flexColumn, display.ml1, 
                                responsive.mdMl0, responsive.mdRow, display.justifyBetween, display.w100)}>
                                <div className={classNames(display.flex, display.flexColumn)}>
                                    <Typography 
                                        component="h2" 
                                        variant="h6" 
                                        className={classNames(text.font7, classes.dark1Text, 'theme-text')}>
                                        { getUser().name }
                                    </Typography>
                                    <Typography 
                                        gutterBottom 
                                        className={classNames(text.rem9, classes.blueText)}>
                                        @{ getUser().login}
                                    </Typography>
                                </div>
                                <Typography variant="body2" className={classNames(classes.lightText, 'theme-text')}>
                                Joinded { getJoinedDate(getUser().created_at) }
                                </Typography>
                            </div>
                        </div>
                        <Typography variant="body2" className={classNames(display.mt2, text.rem9, classes.lightText, 
                            'theme-text', responsive.mdMt1)}>
                            { Boolean(getUser().bio) ? getUser().bio : 'This profile has no bio' }
                        </Typography>
                        <div className={classNames(display.flex, display.justifyBetween, display.mt2, classes.panel,
                            'theme-sub-background-color')}>
                            <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                                <span className={classNames(classes.lightText, 'theme-text')}>Repos</span>
                                <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text, 'theme-text')}>
                                { getUser().public_repos}
                                </span>
                            </Typography>
                            <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                                <span className={classNames(classes.lightText, 'theme-text')}>Followers</span>
                                <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text, 'theme-text')}>
                                { getUser().followers }
                                </span>
                            </Typography>
                            <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                                <span className={classNames(classes.lightText, 'theme-text')}>Following</span>
                                <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text, 'theme-text')}>
                                    { getUser().following }
                                </span>
                            </Typography>
                        </div>
                        <List  disablePadding className={classNames(display.mt2, classes.detailsList)}>
                            <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                                <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    classes={{ primary: text.rem9}} 
                                    className={classNames(classes.lightText, 'theme-text')} 
                                    primary={ Boolean(getUser().location) ? getUser().location : "Not Available"}
                                />
                            </ListItemButton>
                            <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                                <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                    <LinkIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    classes={{ primary: text.rem9}} 
                                    className={classNames(classes.lightText, 'theme-text')} 
                                    primary={ getUser().html_url }
                                />
                            </ListItemButton>
                            <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                                <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                    <TwitterIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    classes={{ primary: text.rem9}} 
                                    className={classNames(classes.lightText, 'theme-text')} 
                                    primary={ Boolean(getUser().twitter_username) ? getUser().twitter_username : "Not Available" }
                                />
                            </ListItemButton>
                            <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                                <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText, 'theme-text')}}>
                                    <ApartmentIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    classes={{ primary: text.rem9}} 
                                    className={classNames(classes.lightText, 'theme-text')} 
                                    primary={ Boolean(getUser().company) ? `@${getUser().company}` : "Not Available" }
                                />
                            </ListItemButton>
                        </List>
                    </div>
                </Paper>
            </main>
        </div>
    )
};

export default Home;