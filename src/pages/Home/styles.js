import { makeStyles } from "@mui/styles";
import { colors } from '../../styles/colors';

const  { blue, dark1, darkLightGrey, lightGrey } = colors;

export const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: '#F2F2F2'
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
        paddingTop: '8px !important'
    },
    formSearchButton: {
        borderRadius: '10px !important',
    },
    avatarRoot: {
        height: '60px !important',
        width: '60px !important'
    },
    lightText: {
        color: `${darkLightGrey} !important`
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
    listItemButton: {
        '&:hover': {
            backgroundColor: 'transparent !important'
        }
    },
    listIcon: {
        minWidth: '43px !important'
    }
}));