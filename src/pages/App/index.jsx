import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import { ThemeContextProvider } from '../../context/ThemeContext';
import Home from '../Home';

const App = () => {
    const theme = createTheme();

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <ThemeContextProvider>
                            <Router>
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                </Routes>
                            </Router>
                        </ThemeContextProvider>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;