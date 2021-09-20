import React, { memo, useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { connect } from 'react-redux';
import { makeStyles, Typography, FormControl, FormGroup, FormControlLabel, FormLabel, FormHelperText, Checkbox } from '@material-ui/core';
import themeConfig from 'config/theme'
import { reducerType } from 'redux/reducers'
import { useDispatch } from 'react-redux'
import { UPDATE_REQUEST, DELETE_REQUEST } from 'redux/reducers/createcourse/actionTypes'
const useStyles = makeStyles(theme => ({
	dialogWrapper: {
		padding: theme.spacing(2),
		position: 'absolute',
		top: theme.spacing(5)
	},

	titlePage: {
		color: themeConfig.hightGreen,
		marginBottom: '40px'
	},
	doneButton: {
		'&:hover': {
			background: themeConfig.lightGreen,
		},
		color: '#fff',
		background: themeConfig.hightGreen,
		marginTop: 20,
	},
	delButton: {
		'&:hover': {
			background: 'red',
		},
		color: '#fff',
		background: themeConfig.lowRed,
		marginTop: 20,
	},
	planButton: {
		'&:hover': {
			background: '#badc58',
		},
		width: 88,
		color: '#fff',
		height: 50,
		background: '#6ab04c',
		margin: '20px 18px',
	},
	formControl: {
		margin: theme.spacing(3),
	},
}))
const mapStateToProps = (state: reducerType) => {
	return {
		isOpenTopAlert: state.global.isOpenTopAlert,
		quesList: state.questionBank.quesList
	};
};
interface planProps {
	elem: any,
	timelineType: string,
	num: number,
	quesList: any,
}
const columns: GridColDef[] = [
	// { field: 'id', headerName: 'ID', width: 100 },
	{
		field: 'category',
		headerName: 'Category',
		width: 120,
		editable: true,
	},
	{
		field: 'quiz',
		headerName: 'Quiz',
		width: 250,
		editable: true,
	},
	{
		field: 'type',
		headerName: 'Type',
		width: 120,
		editable: true,
	},
];
const FormDialog = memo((props: planProps) => {
	const rows = props.quesList.map((elem, idx)=>{
		let index = idx+1
		return {...elem, id:index}
	})
	const [selectionModel, setSelectionModel] = useState<number[]>([]);

	const elem = props.elem
	const timelineType = props.timelineType
	const num = props.num

	const _identify = elem._identify
	const [postData, setPostData] = useState({ _id: elem._id, title: elem.title, content: elem.content, question: elem.question });

	const dispatch = useDispatch()
	const classes = useStyles();

	const deletePlan = () => {
		dispatch({
			type: DELETE_REQUEST,
			payload: elem,
		})
		handleClose()
	}
	//handle open dialog
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleOnClick = () => {
		const dataQues = props.quesList.filter((elem: any, idx: number) => {
			return selectionModel.includes(idx+1)
		})
		dispatch({
			type: UPDATE_REQUEST,
			payload: { ...postData, _identify:_identify, question: dataQues },
		})
		setTimeout(() => {
			handleClose()

		}, 50)
	};


	return (
		<div>
			<Button className={classes.planButton} onClick={handleClickOpen}>
				{timelineType} {num + 1}
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<DialogContent>
					<form>
						<Typography className={classes.titlePage} variant="h4" align="center">{timelineType} {num + 1}</Typography>
						<TextField id="standard-basic" fullWidth label="Id"
							value={postData._id} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPostData({ ...postData, _id: event.target.value }); }}
						/>

						<TextField id="standard-basic" fullWidth label="Title"
							value={postData.title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPostData({ ...postData, title: event.target.value }); }}
						/>

						<TextField id="standard-basic" fullWidth label="Content"
							value={postData.content} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPostData({ ...postData, content: event.target.value }); }}
						/>

						<Typography variant="h6" style={{marginTop:20}} align='center' >Question</Typography>
						<div style={{ height: 400, width: "100%" }}>
							<DataGrid
								rows={rows}
								columns={columns}
								pageSize={10}
								checkboxSelection
								hideFooterPagination
								onSelectionModelChange={(newSelection: any) => {
									setSelectionModel(newSelection);
								}}
								selectionModel={selectionModel}
							/>
						</div>

						<div style={{ display: 'flex', justifyContent: 'space-around' }}>
							<Button className={classes.doneButton} onClick={handleOnClick}>Done</Button>
							<Button className={classes.delButton} onClick={deletePlan}>Delete</Button>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</div >
	);
})
export default connect(mapStateToProps)(FormDialog)