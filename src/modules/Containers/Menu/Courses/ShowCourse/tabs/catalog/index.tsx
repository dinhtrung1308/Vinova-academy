import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getCourses } from 'redux/reducers/courses/coursesActions';
import CourseCard from './components/CourseCard';

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  }
}

const Catalog = (props) => {
  const { courses, loading } = props.courses

  // const disPatch = useDispatch();
  // useEffect(() => {
  //   disPatch(getCourses());
  // }, [ disPatch ]);
  
  return (
    <Grid container spacing={2}>
      <Grid item container spacing={2}>
        {
          !loading && courses.map((course) => 
            (<Grid key={course._id} item md={4} lg={3}>
              <CourseCard 
                id={course._id}
                title={ course.title }
                timeLine={`${course.timeLine} ${course.timeLineType}`}
                mentors={course.mentors}
                category={course.category}
                status={course.status}
                thumbnail={'https://dummyimage.com/300x100/aba1ab/fff'}
                description={course.description}
                mentees={course.mentees}
              />
            </Grid>)
          )
        }
      </Grid>
    </Grid>
    
  )
}

export default connect(mapStateToProps)(Catalog);