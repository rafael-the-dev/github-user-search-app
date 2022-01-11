import { Avatar, Button, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { useDisplay, useTypography } from '../../styles';
import classNames from 'classnames';
import { useStyles } from './styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LinkIcon from '@mui/icons-material/Link';

const Home = () => {
    const display = useDisplay();
    const classes = useStyles();
    const text = useTypography();

    return (
        <div className={classNames(display.alignStretch, display.flex, display.flexColumn, display.px, display.pt1,
            display.pb2, classes.main)}>
            <header className={classNames(display.alignCenter, display.flex, display.justifyBetween, display.w100)}>
                <Typography 
                    className={classNames(text.font7)}
                    component="h1" 
                    variant="h5">
                    devfinder
                </Typography>
                <Button endIcon={<DarkModeIcon />} className={classNames(classes.lightText, text.font7)}>
                    Dark
                </Button>
            </header>
            <main className={classNames(display.pt2)}>
                <Paper component="form" className={classNames(display.alignCenter, display.flex, classes.px, 
                    classes.defaultBorderRadius, classes.form)}>
                    <IconButton>
                        <SearchIcon classes={{ root: classNames(classes.blueText)}} />
                    </IconButton>
                    <input 
                        className={classNames(display.borderNone, display.flexGrow1, display.outlineNone, classes.lightText)}
                        placeholder="Search GitHub username…"
                    />
                    <Button 
                        className={classNames(classes.formSearchButton, text.rem75)}
                        variant="contained">
                        Search
                    </Button>
                </Paper>
                <Paper className={classNames(display.mt2, classes.px, classes.defaultBorderRadius, display.pt1, display.pb2)}>
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
                                className={classNames(text.font7, classes.dark1Text)}>
                                The Octocat
                            </Typography>
                            <Typography 
                                gutterBottom 
                                className={classNames(text.rem9, classes.blueText)}>
                                @octocat
                            </Typography>
                            <Typography variant="body2" className={classNames(classes.lightText)}>Joined 25 Jan 2011</Typography>
                        </div>
                    </div>
                    <Typography variant="body2" className={classNames(display.mt2, text.rem9, classes.lightText)}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    </Typography>
                    <div className={classNames(display.flex, display.justifyBetween, display.mt2, classes.panel)}>
                        <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                            <span className={classNames(classes.lightText)}>Repos</span>
                            <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text)}>8</span>
                        </Typography>
                        <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                            <span className={classNames(classes.lightText)}>Followers</span>
                            <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text)}>3938</span>
                        </Typography>
                        <Typography variant="body2" className={classNames(display.flex, display.flexColumn, display.alignCenter)}>
                            <span className={classNames(classes.lightText)}>Following</span>
                            <span className={classNames(text.font7, display.mt1, classes.panelValue, classes.dark1Text)}>9</span>
                        </Typography>
                    </div>
                    <List  disablePadding className={classNames(display.mt2)}>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText)}}>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: text.rem9}} className={classNames(classes.lightText)} primary="San Francisco" />
                        </ListItemButton>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText)}}>
                                <LinkIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: text.rem9}} className={classNames(classes.lightText)} primary="https://github.blog" />
                        </ListItemButton>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText)}}>
                                <TwitterIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: text.rem9}} className={classNames(classes.lightText)} primary="Not Available" />
                        </ListItemButton>
                        <ListItemButton component="li" className={classNames(display.pl0, classes.listItemButton)}>
                            <ListItemIcon classes={{ root: classNames(classes.listIcon, classes.lightText)}}>
                                <ApartmentIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: text.rem9}} className={classNames(classes.lightText)} primary="@github" />
                        </ListItemButton>
                    </List>
                </Paper>
            </main>
        </div>
    )
};

export default Home;