import { makeStyles, Theme} from '@material-ui/core/styles';
import themeConfig from 'config/theme';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    backgroundColor: themeConfig.mainColor,
    content: 'center',
    height: '35px',
    width: '180px',
    '&:hover': {
      backgroundColor: themeConfig.lightGreen,
    },
  },
  cardRoot: {
    maxWidth: 300,
    minHeight: '400px',
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical"
  },
  cardAvatar: {
    backgroundColor: 'red',
  },
  dialogContent: {
    minHeight: '300px'
  },
  dialogTitle: {
    minHeight: '50px'
  },
  dialogButton: {
    minHeight: '50px'
  },
  dialogContentTitle : {
    minHeight: '50px'
  },
  dialogRules : {
    marginTop: '20px',
  },
  dialogRule: {
    paddingBottom: '10px',
  },
  rulesAvatar : {
    border: '2px solid grey', 
    padding: '5px', 
    height: '30px', 
    width: '30px'
  },
  rulesContent :{
    paddingLeft: '15px'
  },
}));

export default useStyles;