import { Button, Typography } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
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
        </div>
    )
};

export default Home;