import React, { useState, Component, useRef  } from 'react';
import {Grid, Avatar, makeStyles, Typography, withStyles, Card, IconButton, Badge, Button} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import clsx from 'clsx';
import Text from 'modules/Components/Texts/index';
import themeConfig from 'config/theme';
import {Skill} from "./components/Skill";
import {Content} from "./components/Content";
import {Progess} from "./components/Progess";
import { dataProfile } from "./components/dataProfile";
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
const useStyles = makeStyles((theme) => ({
    colorHeader:{
        color: themeConfig.mainColor,
    },
    fsize22: {
        size: themeConfig.fSize22,
    },
    root: {

      background: '#f4f6f8',
    },
    rootPrint: {
        margin: theme.spacing(-2.5),
        background: '#f4f6f8',
      },
    paper: {
        
        background: '#ffffff',
        borderRadius: '10px',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(0),
      }, 
    paperL: {
      textAlign: "center",
      background: '#ffffff',
      borderRadius: '10px',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0),
      height: '97%',
    }, 
     
    paperhead: {
        marginTop: theme.spacing(3),
    }, 
    content: {
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        background: '#ffffff',
        borderRadius: '10px',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 22,
      height: 22
    },
    icons: {
      display: "flex"
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
    list: {
        marginLeft: theme.spacing(5)
    },
    input: {
        display: "none",
    },  
    header :{
        marginLeft: theme.spacing(6.25),
        paddingTop: theme.spacing(2.5)
    }  ,
    button: {
        
        marginRight: theme.spacing(10),
        marginTop: theme.spacing(1.75),
        color: themeConfig.mainColor,
        
    },
    Grid_button: {
        textAlign: "right",
    },
    w100: {
        marginRight: theme.spacing(4),
    }, 
    h2: {
        height: theme.spacing(3),
    }
}));
const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 25,
      height: 25,
      border: `2px solid ${theme.palette.background.paper}`,
      marginTop: theme.spacing(33),
      left: '170%', 
    }
  }))(Avatar);

const Test = ()=> {
    const classes = useStyles(); 

    return (
        <div className={classes.root}>
            {/* <Grid className={classes.header} container   >
                <Grid item xs={8}>
                    <Text color={themeConfig.mainColor} size={themeConfig.fSize30} >Profile</Text>   
                    <Text color={themeConfig.lightGray} >Some Description</Text>           
                </Grid>
                <Grid item xs={4} className={classes.Grid_button}>
                    <Button  variant="outlined" className={classes.button}>
                        Export CV
                    </Button>
            
                </Grid>
                 
            </Grid> */}
            
            <Grid container spacing={3}>
       
                <Grid item xs={12} md={4}>
                    <Card  className={classes.paperL}>
                        <Grid>
                        <Badge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right"
                        }}
                        badgeContent={
                            <SmallAvatar>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="icon-button-file"
                                    type="file"
                                />
                            <label htmlFor="icon-button-file">
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <PhotoCamera />
                              </IconButton>
                            </label>
                            </SmallAvatar>
                        }
                        />
                            <Avatar className={classes.img} src={dataProfile.avatar} />
                            <Typography variant="h4" className={classes.colorHeader} >{dataProfile.name}</Typography>                  
                            <Typography className={classes.fsize22}>{dataProfile.role}</Typography>  
                            <Typography  className={clsx(classes.header_bottom,classes.fsize22)}>{dataProfile.bio}</Typography>
                            <Grid className={classes.paper}>
                                {Progess()}
                            </Grid> 
                        </Grid>
                    </Card>                    
                </Grid>   
                
                <Grid item xs={12} md={8}>   
                    <Content/>        
                    {/* {Content()} */}
                </Grid>
        

            </Grid>
            <Typography className={classes.h2}></Typography>
            <Grid  className = {classes.w100}  spacing={3}>
                {Skill()}
            </Grid>
        
        </div>
    );

};
const Profile = () => {
    const classes = useStyles(); 


    return(
        <div className={classes.rootPrint}>  
  
      

            <Grid className={classes.header} container   >
      

                <Grid item xs={8}>
                    <Text color={themeConfig.mainColor} size={themeConfig.fSize30} >Profile</Text>   
                    <Text color={themeConfig.lightGray} >Some Description</Text>           
                </Grid>
                <Grid item xs={4} className={classes.Grid_button}>
                    <Button onClick={() => window.print()} variant="outlined" className={classes.button}>
                        Export CV
                    </Button>
            
                </Grid>
                 
            </Grid>
            <Test  />

      </div>
    );
};
export default  Profile;