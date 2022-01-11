import { makeStyles } from "@mui/styles";
import { colors } from '../../styles/colors';

const  { lightGrey } = colors;

export const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: '#F2F2F2'
    },
    px: {
        paddingLeft: '4% !important',
        paddingRight: '4% !important'
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
    panel: {
        background: lightGrey,
        borderRadius: 10,
        padding: '1rem 31px',
    },
    panelValue: {
        fontSize: '1rem'
    }
}));