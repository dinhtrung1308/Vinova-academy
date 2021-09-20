import { makeStyles, createStyles, Theme } from '@material-ui/core';
import themeConfig from 'config/theme'
import { Input, withStyles, TextField } from '@material-ui/core';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth:"100%",
      height:"100%",
    },
    rootPage:{
      height:'100vh',
      margin:'0 0',
    },
    titlePage:{
      textDecoration: 'underline',
      color:'#2bc58f',
      height: '80px',
      width: '100%',
      textAlign:'center',
    },
    topbar:{
      height:'50px',
    },
    itemContent:{
      margin:'0 0',
    },
    search: {
      position: 'relative',
      alignItems:'center',
      backgroundColor: 'white',
      border: '4px solid #2bc58f',
      borderRadius:'5px',
      width:'100%',
      height:'37px',
      float:'right',
      '& .MuiInputBase-root': {
        width:'100%',
        height:'100%',
        paddingLeft:'10px',
      },
      '& .Mui-focused': {
        boxShadow: '0 0 12px #2bc58f',
      },
      
    },
    filterWrapper:{
      width:'100%',
      marginBottom:'60px',
    },
    filter:{
      width:'98%',
      margin:'20px 3px',
      border:'2px solid #2bc58f',
      borderRadius:'2px',
      '& .Mui-focused': {
        boxShadow: '0 0 9px #2bc58f',
      },
      color:'grey',
    },

    addNew:{
      color:'white !important',
      borderRadius:'5px',
      border:'0px',
      width:'99%',
      //width:'200px',
      height:'39px',
      backgroundColor:'#2bc58f',
      fontSize:'medium !important',
      float:'left',
      '&:hover': {
        backgroundColor: themeConfig.hightGreen,      
      },

    },
    pagination:{
      margin: '50px auto',
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      padding: '10px',
    },
    dialog:{
      width:'80%',
    },
    addForm:{
      width:'100%',
      border:'2px solid gray',
      borderRadius:'10px',
      margin: '20px 0',
      padding:'10px 0px',
    },
    inputForm:{
      width:'90%',
      margin:'0 auto',
    },
    inputText:{
      width:'100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    labelField:{
      marginLeft: '15px',
      width:'20%',
      color: 'black',
      float:'left',  
      position:'inherit',
    },
    cancelBtn:{
      padding: '8px !important',
      color: 'black !important',
      margin: '10px !important',
      borderRadius: '20px !important',
      width: '44%',
      backgroundColor: '#858480 !important',
      fontSize: 'medium !important',
      //fontWeight: '600 !important',
      '&:hover': {
        backgroundColor: '#4b4a48',      
      },
    },
    addBtn:{
      padding: '8px !important',
      color: 'white !important',
      margin: '10px !important',
      borderRadius: '20px !important',
      width: '44%',
      backgroundColor: '#2bc58f !important',
      fontSize: 'medium !important',
      float: 'right',
      '&:hover': {
        backgroundColor: themeConfig.hightGreen,      
      },
    },
    fileUploadWrap :{
      padding:'15px 10px',
      width:'78%',
      float:'right',
    },
    btnUpload:{
      backgroundColor:'#F2F2F2',
      border: '1px solid black',
      borderRadius:'4px',
      cursor: 'pointer',
      padding:'9px 7px',
      '&:hover': {
        backgroundColor: themeConfig.hightGreen,      
      },
      //float:'left',
    },
    inputFile:{
      display:'none',
    },
    nameFiles:{
      width:'90%',
      overflow:'hidden',
      whiteSpace:'nowrap',
      textOverflow:'ellipsis'
    },
    backToMenu:{
      color:'#2bc58f !important',
      textDecoration:'none',
      float:'right',
      fontSize:'18px',
      margin:'20px 10px',
    },
  }),
  
);

export const MyInput = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#2bc58f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2bc58f',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2bc58f',
      },
    },
    padding:'15px 10px',
    width:'78%',
    float:'right',
  },
})(TextField);