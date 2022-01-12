import { makeStyles } from "@mui/styles";
import { colors } from '../../styles/colors';

const  { blue, dark1, darkLightGrey, lightGrey } = colors;

export const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: '#F2F2F2',
        minHeight: '100vh',
        [theme.breakpoints.up('md')]: {
            paddingTop: '3rem !important'
        }
    },
    px: {
        paddingLeft: '5% !important',
        paddingRight: '5% !important'
    },
    defaultBorderRadius: {
        borderRadius: '14px !important',
    },
    form: {
        paddingBottom: '8px !important',
        paddingTop: '8px !important',
        [theme.breakpoints.up('md')]: {
            paddingRight: '10px !important'
        }
    },
    input: {
        fontSize: '1.02rem'
    },
    formSearchButton: {
        borderRadius: '10px !important',
        [theme.breakpoints.up('md')]: {
            padding: '10px 16px !important'
        }
    },
    avatarRoot: {
        height: '60px !important',
        width: '60px !important',
        [theme.breakpoints.up('md')]: {
            height: '140px !important',
            marginRight: '5%',
            width: '140px !important'
        }
    },
    lightText: {
        color: `${darkLightGrey} !important`,
        '.dark-theme &': {
            opacity: .87
        }
    },
    blueText: {
        color: `${blue} !important`
    },
    dark1Text: {
        color: `${dark1} !important`
    },
    description: {
        
    },
    panel: {
        background: lightGrey,
        borderRadius: 10,
        padding: '1rem 31px',
    },
    panelValue: {
        fontSize: '1.02rem'
    },
    detailsList: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexWrap: 'wrap'
        }
    },
    listItemButton: {
        '&:hover': {
            backgroundColor: 'transparent !important'
        },
        [theme.breakpoints.up('sm')]: {
            width: '50%'
        }
    },
    listIcon: {
        minWidth: '43px !important'
    }
}));