import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routers/routes';
import CourseHeader from './components/CourseHeader';
import Catalog from './tabs/catalog';
import MyCourse from './tabs/mycourse';


const mapStateToProps = (state) => {
  return {
    courses: state.courses
  }
}

const ShowCourse = () => {

  return (
    <Grid container >
      <Grid item md={12}>
        <CourseHeader />
      </Grid>
      <Switch>
        <Route exact path={routes.menu.courses.catalog} component={Catalog}/>
        <Route path={routes.menu.courses.myCourse} component={MyCourse}/>
        <Redirect exact from={routes.menu.courses.default} to={routes.menu.courses.catalog} />
      </Switch>
    </Grid>

  )
}

export default  connect( mapStateToProps )(ShowCourse);