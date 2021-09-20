import React,{useEffect} from 'react';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';
import {FETCH_DATA_ITEST} from "redux/reducers/itest/actionTypes"
import { connect } from "react-redux";
import { reducerType } from "redux/reducers";
import Guide from './Guide';



const mapStateToProps = (state: reducerType) => {
  return {data : state.content};
};


const Itest = (props) => {
  return (
    <>
		    <Content/>
    </>
  );
}

export default connect(mapStateToProps)(Itest);
