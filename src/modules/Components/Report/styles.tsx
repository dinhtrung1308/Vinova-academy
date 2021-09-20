import themeConfig from 'config/theme'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& label.Mui-focused': {
			color: '#3bd1ae',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#3bd1ae',
		},
		width: '100%',
		minHeight: '100vh',
		background: '#fff',
		display: 'flex',
		// justifyContent: 'center'
	},
	form: {
		boxShadow: '1px 2px 9px 2px rgb(0 0 0 / 20%)',
		width: '70%',
		background: '#fff',
		borderRadius: '10px',
		marginTop: '30px',
		marginBottom: '30px',
		padding: '50px 50px',
		margin: 'auto',
	},
	labelTitle: {
		fontSize: "1rem",
		marginTop: theme.spacing(2),
	},
	rootButton: {
		display: 'block',
		margin: 'auto',
		marginTop: '50px',
		background: themeConfig.lightGreen,
		'&:hover': {
			background: "#487e65",
		}
	},
	addButton: {
		display: 'flex',
		fontSize:'28px',
		width:'52px !important',
		padding:0,
		marginLeft: 20,
		height:'52px',
		color:'white',
		borderRadius:'100px',
		background: "#e66767",
		'&:hover': {
			background:'#ea8685',
		}
	},
	
	titlePage: {
		color: themeConfig.hightGreen,
		marginBottom: '80px'
	},
	errorMes:{
		color: 'red',
		display: 'block',
		fontSize:themeConfig.fSize16,
	}
}));
export default useStyles