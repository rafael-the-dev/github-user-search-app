import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: '#F2F2F2'
    },
    px: {
        paddingLeft: '3% !important',
        paddingRight: '3% !important'
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
    }
}));