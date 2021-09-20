import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
//import { ISharing,initialSharing } from 'models/Sharings';
import {Grid,Paper}from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import themeConfig from 'config/theme';
import { Texts } from 'modules/Components';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width:'100%',
      marginBottom:'7px',
      marginTop:'7px',
    },
    media: {
      paddingTop: '56.25%',
      width: '80%',
      height: '80%',
      margin: '0 auto',
    },
    imgWrapper:{
      background:'lightgrey',
      display: 'flex',
      alignItems: 'center',
    },
    myImg:{
      maxWidth:'100%',
      maxHeight:'400px',
      height:'auto',
      width:'auto',
      margin:'0 auto',
    },
    content:{
      padding:'7px 15px',
      display: 'flex',
      alignContent:'flex-start',
    },
    author:{
      display:'flex',
    },

  }),
);

export function SharingCard (props){
  const classes = useStyles();
  const shaList = props.dataList;
  const[keyId, setKeyId] = useState(-1);
  
  return (
  <>
  { shaList.map( (sha,id)=>
    (
    <Paper elevation={(id === keyId)? 10 : 2} key={id} className={classes.root}
            onMouseOver={()=>{setKeyId(id)}}
            onMouseOut={()=>{setKeyId(-1)}} >
    <Grid container>
      <Grid item xs={3} className={classes.imgWrapper}>
        <img src={sha.logo} className={classes.myImg}></img>
      </Grid>
      <Grid item container xs={9} className={classes.content}>
        <Grid item xs={12}> <Texts size={themeConfig.fSize22} color='black'><b>{sha.title}</b></Texts></Grid>
        <Grid item xs={12} className={classes.author}> 
          <span><Texts size={themeConfig.fSize20} color='grey'>by &nbsp; </Texts></span>
          <Texts size={themeConfig.fSize20} color='red'>{sha.author}</Texts> </Grid>
        <Grid item xs={12}>
          <Rating name={sha.title}
          // style={{margin: '2px auto'}}
          value={sha.rating/2}  precision={0.5}  style={{margin: '2px auto'}} onChange={(e, newVal)=>{if(newVal){props.updateRating({id:id, newValue: newVal*2})}}}
          />
        </Grid>
        <Grid item xs={12}> <Texts size={themeConfig.fSize18} color='#194D33'>{sha.technical}</Texts></Grid>
        <Grid item xs={12}> <Texts size={themeConfig.fSize16} color='grey'>{sha.description}</Texts></Grid>
        {/* (sha.files.length >0)  && <Grid item xs={12}> <Texts size={themeConfig.fSize16} color='grey'>{sha.files[0].name}</Texts></Grid>*/}
      </Grid>
    </Grid>
    </Paper>
    )
  )
    }
</>
);
};
