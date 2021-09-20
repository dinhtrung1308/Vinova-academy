import { createStyles, makeStyles } from '@material-ui/core/styles';
import themeConfig from 'config/theme'
import Images from 'config/images'

const useStyles = makeStyles(() =>
  createStyles({

    login: {
      textAlign: 'center',
      padding: '100px 170px 0px 55%',
      display: 'block !important',
    },

    avatar: {
      width: '130px',
    },

    margin: {
      width: '100%',
      padding: '10px !important',
    },

    textField: {
      width: '100%',
      padding: '15px',
    },

    focused: {
      color: `${themeConfig.lightGreen} !important`,
    },

    underline: {
      '&:after': {
        borderBottom: `2px solid ${themeConfig.lightGreen} !important`,
      }
    },

    loginSubmit: {
      padding: '8px !important',
      color: `${themeConfig.titleColor}!important`,
      margin: '20px 10px !important',
      borderRadius: '15px !important',
      width: '100%',
      backgroundColor: `${themeConfig.mainColor} !important`,
      fontSize: 'medium !important',
      fontWeight: themeConfig.fWeight600,
      '&:hover': {
        backgroundColor: `${themeConfig.hightGreen} !important`,
      }
    },

    warning: {
      color: themeConfig.lowRed,
      position: 'absolute',
      bottom: '-10px',
      left: '8px',
    },

  }),
);

export default useStyles;