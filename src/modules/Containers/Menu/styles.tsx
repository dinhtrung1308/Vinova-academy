import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import themeConfig from 'config/theme'
import Images from 'config/images'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuIcon:{
      color: themeConfig.titleColor,
    },
    drawer: {
      width: 230,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: 230,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: themeConfig.mainColor,
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      overflowY: 'hidden',
      width: 63,
      backgroundColor: themeConfig.mainColor,
      zIndex: 2000
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      ...theme.mixins.toolbar,
      padding: '10px 25px',
    },
    toolbarSmall: {
      padding: '10px 22px',
    },
    profileSection: {
      display: 'flex',
      borderTop: '0.5px solid #ffffff',
      borderBottom: '0.5px solid #ffffff',
      padding: '27px 0',
      margin: '0 10px 40px',
    },
    avatar: {
      width: "50px",
      margin: '0 17px 0 7px',
    },
    smallAvatar: {
      width: '34px'
    },
    w90: {
      width: 90
    },
    miniProfile: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    iconBtn: {
      padding: 0,
      '& > span.MuiTouchRipple-root': {
        display: 'none',
      },
      '&:hover': {
      backgroundColor: themeConfig.mainColor,      
      },
      
    },
    gutters: {
      position: 'relative',
      padding: '18px 6px 18px 25px',
      '& > span.MuiTouchRipple-root': {
        display: 'none',
      }
    },
    ml12: {
      marginLeft: 12
    },
    textMenuActive:{
      color: themeConfig.titleColor,
      fontSize: 13,
    },
    textMenu:{
      color: themeConfig.titleColor,
      fontSize: 13,
    },
    listItemActive:{
      position: 'relative',
    },
    activeClass: {
      backgroundColor: themeConfig.hightGreen
    },
    listItemSmall: {
      padding: '14px 21px',
      color: themeConfig.titleColor,
      '&:hover': {
        '& $dropdown': {
          display: 'block',
        }
      }
    },
    customAnchorLeft:{
      borderRight: 'none !important'
    },
    listItemIcon: {
      minWidth: 32,
    },
    listItemText: {
      margin: 0,
    },
    hidden: {
      display: 'none',
    },
    content: {
    flexGrow: 1,
    padding: '20px',
    },
    shiftTextLeft: {
    marginLeft: '60px',
    },
    shiftTextRight: {
    marginLeft: 230,
    },

  }),
);

export default useStyles;
