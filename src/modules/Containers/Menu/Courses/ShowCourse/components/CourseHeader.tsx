import React, { useState } from 'react';
import { useStyles, AntTabs, AntTab } from '../styles'
import { useHistory } from "react-router-dom";
import { Texts } from 'modules/Components/index';
import themeConfig from 'config/theme';
import { Grid, Typography, Button } from '@material-ui/core';
import { routes } from 'routers/routes';
import { useEffect } from 'react';

const CourseHeader = () => {
  const history = useHistory()
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const pathName = history.location.pathname;

  useEffect(()=>{
    pathName === routes.menu.courses.catalog ? setValue(0) : setValue(1);
  },[pathName])
  
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    newValue === 0 ? history.push(routes.menu.courses.catalog) : history.push(routes.menu.courses.myCourse)
    setValue(newValue);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item md={12} className={classes.header}>
        <Texts color={themeConfig.mainColor} size={themeConfig.fSize30} >Courses</Texts>
        <Texts color={themeConfig.lightGray} >Some Description</Texts>
      </Grid>
      <Grid item md={12}>
        <Typography className={classes.padding} />
      </Grid>
      <Grid className={classes.tab} item container md={12} >
        <Grid item className={classes.demo1} lg={10} md={9}>
          <AntTabs value={value} onChange={handleChange}>
            <AntTab label="Browse Catalog" />
            <AntTab label="My Courses" />
          </AntTabs>
        </Grid> 
        <Grid item lg={2} md={3}>
          <Button className={classes.button} onClick={() => {history.push(routes.menu.createcourse)}}>
                <Texts
                  size={themeConfig.fSize14}
                  fontWeight={themeConfig.fWeight400}
                  color="white"
                >
                  Create Course
                </Texts>
              </Button>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <Typography className={classes.padding} />
      </Grid>
    </Grid>
  );
}

export default CourseHeader;