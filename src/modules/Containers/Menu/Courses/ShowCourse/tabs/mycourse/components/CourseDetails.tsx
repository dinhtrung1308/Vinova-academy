import React, { useRef } from 'react';
import clsx from 'clsx';
import { Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Check from '@material-ui/icons/Check';
import { useStyles, useColorlibStepIconStyles, ColorlibConnector } from '../styles';
import { Texts } from 'modules/Components';
import PlanCard from './PlanCard';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import themeConfig from 'config/theme';

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  }
}

const userID = '2';

const CourseDetails = (props) => {
	const { id } = useParams<{ id: string }>()	
	const { courses } = props.courses	
  const course = courses.find(course => (course._id === id))

	const stepperRef = useRef<HTMLInputElement>(null)
  const classes = useStyles()
  const activeStep = getActiveStep(course, userID);
  const steps = getSteps(course);

	const onNextButtonClick = () => {
		if(stepperRef && stepperRef.current) {
			stepperRef.current.scrollLeft = stepperRef.current.scrollLeft - 400;
		}
	}
	const onPreviousButtonClick = () => {
		if(stepperRef && stepperRef.current) {
			stepperRef.current.scrollLeft = stepperRef.current.scrollLeft + 400;
		}
	}

  return (
	<Grid container spacing={5}>
	  <Grid item md={12}>
		<Texts 
		  color={themeConfig.hightGreen} 
		  fontWeight={themeConfig.fWeight600} 
		  size={themeConfig.fSize24} 
		>
		  {course.title}
		</Texts>
	  </Grid>
	  <Grid item container >
				<Grid item md={1} >
					<Button 
						className={classes.arrowButton}
						size='small' 
						onClick={onNextButtonClick} 
						startIcon={<ArrowBackIosRoundedIcon />}/>
				</Grid>
				<Grid item md={10}>
					<Stepper ref={stepperRef} className={classes.stepper} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
							{steps.map((label,index) => (
								<Step key={index} className={classes.step}>
									<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
								</Step>
							))}
						</Stepper>
				</Grid>
				<Grid item md={1} alignItems="center">
				<Button 
					className={classes.arrowButton}
					size='small' 
					onClick={onPreviousButtonClick} 
					startIcon={<ArrowForwardIosRoundedIcon />}/>
				</Grid>
	  </Grid>
	  <Grid item container md={12} spacing={3}>
		{course.plan.map((plan, index) => (
		  <Grid item md={4} lg={2} key={index}>
			<PlanCard 
			  timelineType={course.timeLineType}
			  plan={plan} 
			  activeStep={activeStep}
			  index={index}/>
		  </Grid>
		))}
	  </Grid>
	</Grid>
  )
}

function getSteps(course) {
  return course.plan.map((plan) => plan.title) ;
}

function getActiveStep (course, userID) {
 return course.mentees.find(mentee => mentee.menteeId === userID).passedPlan.length
}

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  return (
	<div
	  className={clsx(classes.root, {
		[classes.active]: active,
		[classes.completed]: completed,
	  })}
	>
	  { completed? <Check/> : Number(props.icon)}
	</div>
  );
}
export default connect(mapStateToProps)(CourseDetails);