import { Button, IconButton, Paper, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { useDisplay } from '../../styles';
import classNames from 'classnames'

const Home = () => {
    const display = useDisplay();

    return (
        <div className={classNames(display.alignStretch, display.flex, display.flexColumn, display.px, display.pt1)}>
            <header className={classNames(display.alignCenter, display.flex, display.justifyBetween, display.w100)}>
                <Typography component="h1" variant="h5">devfinder</Typography>
                <Button endIcon={<DarkModeIcon />}>
                    Dark
                </Button>
            </header>
            <main className={classNames(display.pt2)}>
                <Paper component="form" className={classNames(display.alignCenter, display.flex)}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input 
                        className={classNames(display.borderNone, display.flexGrow1, display.outlineNone)}
                        placeholder="Search GitHub username…"
                    />
                    <Button variant="contained">Search</Button>
                </Paper>
            </main>
        </div>
    )
};

export default Home;