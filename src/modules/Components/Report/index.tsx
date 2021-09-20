import React, { memo, useState } from "react";
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
import { TextField, FormControl, RadioGroup, FormControlLabel, Typography, Button } from '@material-ui/core';
import useStyles from './styles'
import { useDispatch } from 'react-redux'
const mapStateToProps = (state: reducerType) => {
	return {
		isOpenTopAlert: state.global.isOpenTopAlert,
	};
};
interface reportProps {

}
const Report = memo((props: reportProps) => {
	const classes = useStyles()
	const { register, handleSubmit, reset,  formState: { errors } } = useForm();
	const handleSmt = handleSubmit((data) => {
	  	data = {...data};
		console.log('submit report', data);
		alert('You submitted at :'+' '+ data.date);
		reset();
	});
	

	const dispatch = useDispatch()

	return (
		<div className={classes.root} >
			<form className={classes.form}>
				<Typography className={classes.titlePage} variant="h4" align="center">Daily Report</Typography>
        		<Typography  variant="h5" style={{ marginTop: 20 }}>Content of Report</Typography>
        		<Typography style={{ marginTop: 20 }} variant="subtitle1">
              	1. What did you do today?
        		</Typography> 
        		<Typography style={{ marginTop: 20 }} variant="subtitle1">
              	2. Are there any problems?
        		</Typography>
        		<Typography style={{ marginTop: 20 }} variant="subtitle1">
              	3. What will you do tomorrow?
        		</Typography>        
				<TextField id="standard-basic" style={{ marginTop: 20 }} fullWidth multiline maxRows={5} label="Today" {...register("today", { required: true })} />
        		{errors.today && <span className={classes.errorMes}>This field is required</span>}
        		<TextField id="standard-basic" style={{ marginTop: 20 }} fullWidth multiline maxRows={5} label="Problem" {...register("problem", { required: true })} />
        		{errors.problem && <span className={classes.errorMes}>This field is required</span>}
        		<TextField id="standard-basic" style={{ marginTop: 20 }} fullWidth multiline maxRows={5} label="Tomorrow" {...register("tomorrow", { required: true })} />
				{errors.tomorrow && <span className={classes.errorMes}>This field is required</span>}
				<TextField
				label="Date"
				type="date"
				fullWidth
				style={{ marginTop: 20 }}
				{...register("date", { required: true })} 
				InputLabelProps={{
				shrink: true,
				}}
				/>
				{errors.date && <span className={classes.errorMes}>This field is required</span>}
				<Button classes={{ root: classes.rootButton }} onClick={handleSmt} type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
		</div>
	);
}
)

export default connect(mapStateToProps)(Report);