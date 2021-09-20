import React from "react";
import {Grid, makeStyles, Typography, Divider, Card} from "@material-ui/core";
import themeConfig from 'config/theme';
import { dataProfile } from "./dataProfile";
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WcIcon from '@material-ui/icons/Wc';
import CakeIcon from '@material-ui/icons/Cake';
import SchoolIcon from '@material-ui/icons/School';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DateRangeIcon from '@material-ui/icons/DateRange';
const useStyles = makeStyles((theme) => ({
    colorHeader:{
        color: themeConfig.mainColor,
    },
    root: {
      flexGrow: 1,
      background: '#f4f6f8',
      height: '100%',

    },
    paper: {
      margin: theme.spacing(4),
      textAlign: "center",
      background: '#ffffff',
      borderRadius: '10px',
      
    },  
    paper1: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(0),
        background: '#ffffff',
        borderRadius: '10px',
        height: '97%',
    }, 
    paperhead: {
        marginTop: theme.spacing(0.8),
    },
    content: {
        margin: theme.spacing(4),
        background: '#ffffff',
    },
    icon: {
      marginRight: theme.spacing(0.5),
    //   marginBottom: theme.spacing(0.5),
      width: 22,
      height: 22
    },
    icons: {
      display: "flex",
      marginBottom: theme.spacing(1)
    },
    header_bottom: {
        marginBottom: theme.spacing(5)
    },
    crossbar: {
        width: '100%',
        height: 3, 
        background: themeConfig.mainColor,
    },
    img: {
        width: theme.spacing(17),
        height: theme.spacing(17),
        left: '50%', 
        top: '50%',
        transform: 'translateX(-50%)',
        marginBottom: theme.spacing(2),
    },
    space: {
        marginBottom: theme.spacing(3)
    },
    list: {
        marginLeft: theme.spacing(5)
    },
    footer: {
        marginBottom: theme.spacing(10)
    }, 
    input: {
        display: "none",
    },    
}));
export const Content = ()=> {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Card className = {classes.paper1} >
                <Grid className = {classes.paperhead} container spacing={3}> 
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Typography variant="h6" className={classes.colorHeader} >CONTACT</Typography>
                        <Typography className={classes.crossbar} ></Typography>   
                    </Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item  sm ={1}></Grid>
                    <Grid item xs={11}  wrap="nowrap">
                        <Grid  className={classes.icons}>
                            <PhoneIcon className={classes.icon} />  
                            <Typography>: 00000000</Typography>                                
                        </Grid>
                        <Grid  className={classes.icons}>
                            <EmailIcon className={classes.icon} />                        
                            <Typography>: {dataProfile.email}</Typography>             
                        </Grid>
                        <Grid  className={classes.icons}>
                            <DateRangeIcon className={classes.icon} />                        
                            <Typography>: {dataProfile.age} years old</Typography>             
                        </Grid>
                        <Grid  className={classes.icons}>
                            <CakeIcon className={classes.icon} />                        
                            <Typography>: {dataProfile.birthday}</Typography>             
                        </Grid>
                        <Grid  className={classes.icons}>
                            <WcIcon className={classes.icon} />                        
                            <Typography>: {dataProfile.gender}</Typography>             
                        </Grid>
                        <Typography className={classes.space}></Typography>
                    </Grid>
                </Grid>
                <Divider />
                <Grid className = {classes.paperhead}  container spacing={3}> 
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Typography variant="h6" className={classes.colorHeader} >EDUCATION</Typography>
                        <Typography className={classes.crossbar} ></Typography>   
                    </Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={1}></Grid>
                    <Grid item xs={11} >
                        <Grid  className={classes.icons}>
                            <SchoolIcon className={classes.icon} />                        
                            <Typography>: {dataProfile.education[0].grade}</Typography>             
                        </Grid>
                        <Grid  className={classes.icons}>
                            <SchoolIcon className={classes.icon} />                        
                            <Typography>: {dataProfile.education[0].name}</Typography>             
                        </Grid>
                        <Grid  className={classes.icons}>
                            <AccessTimeIcon className={classes.icon} />                        
                            <Typography>: {dataProfile.education[0].start} - {dataProfile.education[0].end}</Typography>             
                        </Grid>
                        <Typography className={classes.space}></Typography>
                    </Grid>          
                </Grid>
            </Card>
      
        </div>
    );

}

