import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import FlagIcon from '@material-ui/icons/Flag';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {FETCH_DATA_ITEST} from "redux/reducers/itest/actionTypes"
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import {initialProfile, initialSteps} from 'models/itestdata';


const useQontoStepIconStyles = makeStyles({
  root: {
    //color: '#eaeaf0',
    color: 'red',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .MuiStepLabel-label':{
        color: "red"
      },
  },
  active: {
    color: 'red',
    '& .MuiStepLabel-label.MuiStepLabel-active':{
        opacity: 0,
    }
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};



const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  '& .MuiStepLabel-label':{
    color: "red"
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(136deg, #2bc58f 0%, #38d39f 50%, #6eb8d4 100%)',
    },
    '& .MuiStepLabel-label.MuiStepLabel-active':{
        opacity: 0,
    },
    '& .MuiStepLabel-label':{
        color: "red"
    }
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(136deg, #2bc58f 0%, #38d39f 50%, #6eb8d4 100%)',
    },
    '& .MuiStepLabel-label.MuiStepLabel-active':{
        opacity: 0,
    },
    '& .MuiStepLabel-label':{
        color: "red"
    }
    
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

//Icon
const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient(136deg, #2bc58f 0%, #38d39f 50%, #6eb8d4 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, #2bc58f 0%, #38d39f 50%, #6eb8d4 100%)',
  },

});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FlagIcon />,
    2: <SettingsIcon />,
    3: <AccessAlarmsIcon />,
    4: <NotificationsActiveIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    background: "#F4F4F4",
    padding: "20px 0 0 0",
    '& .MuiStepLabel-label':{
        opacity: 0.2,
        
      },
    '& .MuiStepLabel-label.MuiStepLabel-active':{
        opacity: 1,
    },
    '& .MuiStepLabel-label.MuiStepLabel-completed':{
        opacity: 1,
    },
    '& .MuiPaper-root':{
        background: "#F4F4F4",
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    
  },
  box:{
    backgroundImage: 'linear-gradient(136deg, #2bc58f 0%, #38d39f 50%, #6eb8d4 100%)',
    padding: '10px',
    color: "white",
    marginTop: 40,
    marginBottom: 40,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    borderRadius:"5px",
    minHeight: 204,
},
  btn:{
    display:"flex",
    justifyContent: "center",
  },
  title:{
      margin: 0,
      textAlign:"center",
      textTransform: "uppercase",
        fontWeight: "bold",
        color: "#0000009c",
      
  },
  text:{
      textAlign: "justify",
      lineHeight: 1.6,
  }

}));



export default function Guide() {
  const history = useHistory();
  if(initialProfile.test.isDone === true){
     history.push(`/dashboard`);
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
       type: FETCH_DATA_ITEST,
       payload: initialProfile.test._id,
       });

  },[]);

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps:initialSteps = {
    infors: [
          {
          title: "M???c Ti??u",
          text: "????? thu???n ti???n cho vi???c ????nh gi?? kh??ch quan ki???n th???c c???a c??c th???c t???p sinh, Vinova s??? ????a ra m???t b??i test ????n gi???n v??? ki???n th???c c??n b???n. C??c b???n th???c t???p b???t bu???c ph???i l??m b??i test ????nh gi?? n??y.",
        },
        {
            title: "C???u Tr??c B??i Test",
            text: "B??i Test g???m c?? 2 ph???n: tr???c nghi???m v?? t??? lu???n. ?????i v???i ph???n tr???c nghi???m th???c t???p sinh ?????c k?? c??y h???i v?? ????nh d???u t??ch v??o ?? l???a ch???n (ch??? ch???n 1 ????p ??n duy nh???t). ?????i v???i ph???n t??? lu???n, th???c t???p sinh ??i???n v??o ?? tr???ng ???? ????? ra.",
          },
          {
            title: "Th???i gian l??m b??i",
            text: "Th???i gian cho c??? b??i Test n??y l?? 30 ph??t. Th???i gian b???t ?????u t??nh khi th???c t???p sinh nh???n v?? l??m b??i. L??u ?? b??i l??m s??? t??? ?????ng submit khi th???i gian h???t, n??n th???c t???p sinh ph??n c???n b??? th???i gian l??m b??i cho ph?? h???p. ",
          },
          {
            title: "L??u ?? ",
            text: "?????i v???i ph???n tr???c nghi???m, th???c t???p sinh b???t bu???c ph???i ho??n th??nh 100%, ph???n t??? lu???n c?? th??? ????? tr???ng n???u kh??ng r?? ????p ??n. Trong su???t qu?? tr??nh l??m b??i test, th???c t???p sinh kh??ng ???????c s??? d???ng b???t c??? t??i li???u n??o.",
          },
    ]};

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNextPageTest = () => {
    history.push(`/itest`);
  };



  return (
    <div className={classes.root}>
        <h3 className={classes.title}>H?????ng D???n L??m B??i Test</h3>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.infors.map((element) => (
          <Step key={element.title}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
                <div className={classes.box} >
                    <h3>{element.title}</h3>
                    <p className = {classes.text}>
                        {element.text}
                    </p>
                </div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.btn}>
        
          <div>
            
            <div>
              <Button disabled={activeStep === 0}
                variant="contained"
                color="primary"
                onClick={handleBack}
                className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep >= steps.infors.length - 1 ? 'Finish' : 'Next'}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextPageTest}
                className={classes.button}
              >
                L??m B??i Ngay
              </Button>
            </div>
          </div>
        
      </div>
    </div>
  );
}