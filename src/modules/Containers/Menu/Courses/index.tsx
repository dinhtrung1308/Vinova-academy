import React, { memo } from 'react';
import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
import Course from './CreateCourse';

const mapStateToProps = (state: reducerType) => {
  return {
    // isLoading: state.global.isLoading,
  };
};

interface coursesProps {
}
const Courses = memo((props: coursesProps)=>{
  return (
    <>
		<Course/>
    </>
  );
})

export default connect(mapStateToProps)(Courses);