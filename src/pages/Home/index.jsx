import { Avatar, Button, IconButton, Paper, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { useDisplay, useTypography } from '../../styles';
import classNames from 'classnames';
import { useStyles } from './styles';

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
                <Button endIcon={<DarkModeIcon />}>
                    Dark
                </Button>
            </header>
            <main className={classNames(display.pt2)}>
                <Paper component="form" className={classNames(display.alignCenter, display.flex, classes.px, 
                    classes.defaultBorderRadius, classes.form)}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input 
                        className={classNames(display.borderNone, display.flexGrow1, display.outlineNone)}
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
                            <Typography component="h2" variant="h6" className={classNames(text.font7)}>The Octocat</Typography>
                            <Typography className={classNames(text.rem9)}>octocat</Typography>
                            <Typography variant="body2">Joined 25 Jan 2011</Typography>
                        </div>
                    </div>
                </Paper>
            </main>
        </div>
    )
};

export default Home;