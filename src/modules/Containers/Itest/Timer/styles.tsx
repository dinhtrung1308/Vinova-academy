import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
		display:"flex",
		flexDirection: 'row',
    	background: '#2BC58F',
		justifyContent: 'center',
  },
  title: {
		height: 'fit-content',
		margin:'auto',
		marginLeft: '20px',
  },
  timer: {
		fontFamily: 'Lato,sans-serif',
		marginLeft:'10px',
	},
}));
