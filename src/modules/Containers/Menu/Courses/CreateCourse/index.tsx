import React, { memo, useState } from "react";
import { useForm } from 'react-hook-form'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from 'draft-js';
import { TextField, FormControl, RadioGroup, FormControlLabel, Radio, Typography, MenuItem, Select, InputLabel, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles'
import themeConfig from 'config/theme'
import Plan from './Plan/plan'
import { useDispatch } from 'react-redux'
import { ADD_REQUEST, CREATE_COURSE_REQUEST } from 'redux/reducers/createcourse/actionTypes'
const mapStateToProps = (state: reducerType) => {
	return {
		isOpenTopAlert: state.global.isOpenTopAlert,
		plan: state.updatePlan.plan,
	};
};
interface courseProps {
	plan: any
}
const Course = memo((props: courseProps) => {
	const classes = useStyles()
	const [timelineType, setTimelineType] = useState('');
	const [showPlan, setShowPlan] = useState(false)
	const handleChange = (event) => {
		setTimelineType(event.target.value);
		setShowPlan(true)
	};
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	// texteditor
	const [editorState, setEditorState] = useState(
		() => EditorState.createEmpty(),
	);
	const dataToSaveBackend = convertToRaw(editorState.getCurrentContent());
	const dispatch = useDispatch()
	const handleSmt = handleSubmit((data) => {
		const planData = props.plan.map((elem)=>{
			delete elem._identify
			return elem
		})
		const dataSubmit = { ...data, plan: planData, description: dataToSaveBackend, timeLine: Object.keys(props.plan).length }
		console.log('datasubmittt', dataSubmit)
		dispatch({
			type: CREATE_COURSE_REQUEST,
			payload: dataSubmit,
		})
	});

	const addMorePlan = () => {
		dispatch({
			type: ADD_REQUEST,
			payload: {
				_id: '',
				title: '',
				content: '',
				question: [],
			},
		})
	}
	const listOption = ["HTML", "Javascript", "React JS", "Node JS"]
	const [status, setStatus] = React.useState('');

  const handleChangeStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };
	return (
		<div className={classes.root} >
			<form className={classes.form}>
				<Typography className={classes.titlePage} variant="h4" align="center">Create Course</Typography>

				<TextField id="standard-basic" style={{ marginTop: 20 }} fullWidth label="Title" {...register("title", { required: true })} />
				{errors.title && <span className={classes.errorMes}>This field is required</span>}


				<Autocomplete
					id="free-solo-demo"
					freeSolo
					options={listOption.map((option) => option)}
					renderInput={(params) => (
						<TextField {...params} label="Category" margin="normal" variant="outlined"
							{...register("category", { required: true })} />
					)}
				/>
				{errors.category && <span className={classes.errorMes}>This field is required</span>}

				<Typography variant="h6" style={{ marginTop: 20 }}>Description</Typography>
				<div className={classes.textEditor}>
					<Editor
						editorState={editorState}
						onEditorStateChange={setEditorState}
					/>
				</div>

				<Typography variant="h6" style={{ marginTop: 20 }}>Study</Typography>
				<RadioGroup className={classes.inputRadio} aria-label="timeLineType" {...register("timeLineType", { required: true })} onChange={handleChange}>
					<FormControlLabel
						value="day"
						control={<Radio disableRipple classes={{ root: classes.radio, checked: classes.checked }} />}
						label="Day"
					/>
					<FormControlLabel
						value="week"
						control={<Radio disableRipple classes={{ root: classes.radio, checked: classes.checked }} />}
						label="Week"
					/>
				</RadioGroup>
				{errors.timeLineType && <span className={classes.errorMes}>This field is required</span>}

				{showPlan && <>
					<Typography variant="h6" style={{ marginTop: 20 }} >Plan</Typography>
					<Plan timelineType={timelineType} />
					<Button classes={{ root: classes.addButton }} onClick={addMorePlan}>+</Button>
				</>
				}
				<FormControl fullWidth style={{ marginTop: 20 }} >
					<InputLabel id="demo-simple-select-label">Status</InputLabel>
					<Select {...register("status", { required: true })}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleChangeStatus}
        >
          <MenuItem value={'active'}>active</MenuItem>
          <MenuItem value={'preparing'}>preparing</MenuItem>
        </Select>
					{errors.status && <span style={{ color: 'red', fontSize: themeConfig.fSize16 }}>This field is required</span>}
				</FormControl>

				<Button classes={{ root: classes.rootButton }} onClick={handleSmt} type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
		</div>
	);
}
)

export default connect(mapStateToProps)(Course);