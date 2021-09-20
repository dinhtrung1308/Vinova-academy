import React from "react";
import {Grid,  makeStyles, Typography, LinearProgress, withStyles} from "@material-ui/core";
import themeConfig from 'config/theme';
import { dataProfile } from "./dataProfile";
const useStyles = makeStyles((theme) => ({
    colorHeader:{
        color: themeConfig.mainColor,
    },
    root: {
      margin: theme.spacing(-2.5),
      background: '#f4f6f8',
    },
    graph: {
        color: '#E91E63',
        width: '100%',
        height: 10, 
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(2),
 
    },
    crossbar: {
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(2),
        width: '100%',
        height: 10, 
        background: '#000',
    },
    crossbar1: {
        width: '85%',
        height: 10, 
        background: '#E91E63',
    },
    paperR: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        textAlign: "right",
    
    },
    paperL: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        textAlign: "left",
    
    }, 
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      backgroundColor: "#000"
    },
    colorPrimary: {
      backgroundColor: 
        theme.palette.grey[theme.palette.type === "light" ? 300 : 100]
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#2bc58f"
    }
  }))(LinearProgress);
  


export const Progess = ()=> {
    const classes = useStyles();
    let new_skill = dataProfile.skill.map(function(skill) {
        return skill.technology
    })    
    let new_rating = dataProfile.skill.map(function(skill) {
        return skill.rating * 10
    })  
    if(new_skill[3]){
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid className={classes.paperL} item xs={8}>
                        HTML/CSS/Javascript
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        85%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={85} 
                    />
                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[0]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[0]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[0]} 
                    />

                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[1]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[1]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[1]} 
                    />     
                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[2]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[2]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[2]} 
                    />
                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[3]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[3]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[3]} 
                    />       
                </Grid>
            </div>
        );
    }
    if(new_skill[2]){
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid className={classes.paperL} item xs={8}>
                        HTML/CSS/Javascript
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        85%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={85} 
                    />
                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[0]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[0]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[0]} 
                    />
                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[1]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[1]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[1]} 
                    />     
                      <Grid className={classes.paperL} item xs={8}>
                        {new_skill[2]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[2]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[2]} 
                    />         
                </Grid>
            </div>
        );
    }
    if(new_skill[1]){
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid className={classes.paperL} item xs={8}>
                        HTML/CSS/Javascript
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        85%
                    </Grid>
                    {/* <LinearProgress  className={classes.graph}
                        variant="determinate"
                        value={85}
                        color="primary"
                      /> */}
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={85} 
                    />

                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[0]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[0]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[0]} 
                    />

                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[1]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[1]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[1]} 
                    />
                </Grid>
            </div>
        );
    }
    if(new_skill[0]){
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid className={classes.paperL} item xs={8}>
                        HTML/CSS/Javascript
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        85%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={85} 
                    />

                    <Grid className={classes.paperL} item xs={8}>
                        {new_skill[0]}
                    </Grid>
                    <Grid className={classes.paperR} item xs={4}>
                        {new_rating[0]}%
                    </Grid>
                    <BorderLinearProgress 
                    className={classes.graph} 
                    variant="determinate" 
                    value={new_rating[0]} 
                    />
                </Grid>
            </div>
        );
    }
}

