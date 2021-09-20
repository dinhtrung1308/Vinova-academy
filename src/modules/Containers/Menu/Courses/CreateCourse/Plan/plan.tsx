import React, { memo, useEffect, useState } from "react";
import themeConfig from 'config/theme'
import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
import { makeStyles } from '@material-ui/core/styles';
import { IPlan } from 'models/CreateCourse'
import FormDialog from './dialog'

const mapStateToProps = (state: reducerType) => {
	return {
		isOpenTopAlert: state.global.isOpenTopAlert,
		plan: state.updatePlan.plan,
		state: state
	};
};
const useStyles = makeStyles((theme) => ({
	root: {
		'& label.Mui-focused': {
			color: '#1a5648',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#1a5648',
		},
		width: '100%',
		minHeight: '100vh',
		background: '#e2e8f0',
		display: 'flex',
		// justifyContent: 'center'
	},
	form: {
		width: '800px',
		background: '#fff',
		borderRadius: '10px',
		marginTop: '30px',
		marginBottom: '30px',
		padding: '50px 50px',
		margin: 'auto',
	},

	formControl: {
		width: '100%',
		margin: 'auto',
		marginTop: '20px'
	},

	textEditor: {
		border: "2px solid #1a5648",
		padding: '8px',
		minHeight: '400px',
		maxWidth: '100%',
		flexWrap: 'wrap',
		borderRadius: '10px',
		backgroundSize: 'cover'
	},

	text: {
		width: '700px',
		marginTop: '20px'
	},
	labelTitle: {
		fontSize: "1rem",
		marginTop: theme.spacing(2),
	},
	// radio
	inputRadio: {
		marginLeft: theme.spacing(3),
		flexWrap: "wrap",
		flexDirection: "row",
	},
	radio: {
		'&$checked': {
			color: themeConfig.lightGreen
		}
	},
	checked: {},

	rootButton: {
		'&:hover': {
			background: themeConfig.lightGreen,
		},
		display: 'block',
		background: themeConfig.hightGreen,
		margin: 'auto',
	},

	titlePage: {
		color: themeConfig.hightGreen,
		marginBottom: "10px",
	},

	plan: {
		border: "2px solid #1a5648",
		borderRadius: '10px',
		backgroundSize: 'cover',
		width: '150px',
		minHeight: '100px',
		padding: '10px',
	}
}));
interface planProps {
	plan: any,
	timelineType:string,
}

const Plan = memo((props: planProps) => {
	const classes = useStyles()
	const plan = props.plan
	const timelineType = props.timelineType
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			{plan.map((elem, index) => {
				return <FormDialog key={index} elem={elem} num={index} timelineType={timelineType} />
			})}
		</div>
	);
})

export default connect(mapStateToProps)(Plan);