import { HoverState } from "@devexpress/dx-react-chart";
import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const MyButton = withStyles({
  root: {
      color: 'white',
      marginTop: '30px',
      padding: '8px 40px',
      fontSize: '15px',
      backgroundColor: '#2bc58f',
      '&:hover': {
          backgroundColor: '#2bc58f',
      },
  },
})(Button);

export const useStyles = makeStyles((theme) => ({
    rating: {
       fontSize: "1.2rem",
    },
    grid__left: {
      background: "#F4F4F4",
      border: "1px solid #E4E5E5",
      padding: '0 15px !important',
    },
    grid__right: {
      position: "fixed",
      textAlign: "center",
      right: 0,
      top: 0,
      width: "100%"

    },
    mybutton: {
      backgroundColor: "04AA6D",
    },
    isSelect: {
      color: "white",
      backgroundColor: "#2BC58F",
      fontSize: "1rem",
      width: "30px",
      height: "30px",
      margin: "4px",
    },
    noSelect: {
      color: "white",
      backgroundColor: "#ccc",
      fontSize: "1rem",
      width: "30px",
      height: "30px",
      margin: "4px",
    },
    form: {
      '& .MuiRadio-colorPrimary.Mui-checked': {
        color: "white",
      },
      '& .MuiRadio-root ': {
        color: "white"
      },
      '& .MuiSvgIcon-root': {
        fontSize: "1rem",
      },
      '& .PrivateSwitchBase-root-5': {
        padding: "4px"
      },
      '& .MuiTypography-body1': {
        fontSize: "0.9rem"
      },
      '& .MuiFormControlLabel-labelPlacementStart': {
        marginRight: "-5px",
      },
    },
    content__question__box:{
        backgroundColor: "white",
        padding: "10px 0 0 0",
        marginBottom: "20px"
    },
    content__question__number : {
        fontWeight: "bold",
        marginLeft: "20px",
    },
    content__option:{
        display: "flex",
        flexWrap: "wrap",
        padding: "0 80px",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: "20px",
        boxSizing: "border-box",
    },
    content__option__item:{
        marginRight: "-15px",
        minWidth: "190px"
    },
    content__answer:{
        background: "#2bc58f",
        marginTop: "20px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "0 20px",
        justifyContent: "space-between",
    },
    content__answer__select:{
        display: "flex",
        alignItems: "center",
        minWidth: "252px", 
    },
    content__answer__category: {
        textTransform: "uppercase",
        marginLeft: "-90px",
        flex: "1"
    },
    question__palette:{
        padding: "15px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    question__palette__link:{
        textDecoration: "none"
    },
    quiz__title:{
        textAlign: "center",
        margin: "10px",
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#0000009c",
    },
    meserr:{
      width: 306,
      position: "fixed",
      top: 0,
      right: 0,
      height: 53,
      alignItems: "center",
    },
    loadding:{
      color:'#2bc58f',
      marginLeft: 78,
    }
    
  }));