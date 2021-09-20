import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import themeConfig from 'config/theme';
import { StepConnector , LinearProgress} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  planCompleted : {
    backgroundColor: '#E5FADC'
  },
  planPending : {
    backgroundColor: '#FFFCD5'
  },
  planNotCompleted : {
    backgroundColor: '#FDE8E8'
  },
  stepper: {
      overflowY: "hidden",
      overflowX: 'hidden',
      margin: 0,
      padding: 0,
      listStyle: "none",
      height: "100%",
      scrollBehavior: 'smooth',
  },
  step : {
    minWidth: '100px'
  },
  button: {
    backgroundColor: themeConfig.mainColor,
    content: 'center',
    height: '35px',
    width: '180px',
    '&:hover': {
      backgroundColor: themeConfig.lightGreen,
    },
  },
  arrowButton : {
    height: '50px',
    width: '50px',
  },
  card: {
    width: '100%', 
    height: '160px'
  },
  cardHeader: {
    paddingBottom: '0px'
  },
  progressButton: {
    backgroundColor: themeConfig.mainColor,
    content: 'center',
    height: '35px',
    width: '100px',
    '&:hover': {
      backgroundColor: themeConfig.lightGreen,
    },
  },
  cardAction: {
    marginTop: '10px', 
    marginRight: '20px'
  },
  cardContent: {
    width: '90%'
  }
  
}));


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 13,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 5,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#FDE8E8',
    zIndex: 1,
    color: '#fff',
    width: 30,
    height: 30,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 8,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

export { useStyles,useColorlibStepIconStyles, ColorlibConnector ,BorderLinearProgress} 