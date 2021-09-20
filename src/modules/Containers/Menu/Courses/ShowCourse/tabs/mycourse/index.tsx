import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import CourseDetails from './components/CourseDetails';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routers/routes';
import MyCourseCard from './components/MyCourseCard';
import { Grid } from '@material-ui/core'

const mapStatetoProps = (state) => {
  return {
    courses : state.courses
  }
}

const userID = '2';

const MyCourse = (props) => {
  const { courses } = props.courses
  const myCourses = useMemo(() => {
    return courses.filter((course) => (course.mentees.find(mentee => mentee.menteeId === userID) !== undefined))
  }, [courses])
  return (
    <Switch>
      <Route exact path={`${routes.menu.courses.myCourse}`}>
        <Grid container spacing={3}>
          {
            myCourses && myCourses.map(course => (
            <Grid item md={12} key={course._id}>
              <MyCourseCard data={course}/>
            </Grid>  
              ))
          }
        </Grid>
      </Route>
      <Route path={`${routes.menu.courses.myCourse}/:id`}>
        <CourseDetails />
      </Route>
    </Switch>
  )
}

export default connect(mapStatetoProps)(MyCourse);