import { Alert } from '@material-ui/lab';
import 'asset/css/alert.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_CLOSE_TOP_ALERT } from 'redux/reducers/global/actionTypes';

const TopAlert = (props) => {

  const { check, sucMess, errMess } = props;

  const [isAlert, setIsAlert] = useState('not')

  const dispatch = useDispatch();

  useEffect(() => {
    check === "success" ?
      setIsAlert('success') :
      check === "error" ?
        setIsAlert('error') :
        setIsAlert('not');

    let timeout = setTimeout(() => dispatch({ type: SET_CLOSE_TOP_ALERT }), 4000)

    return () => {
      clearTimeout(timeout);
    }
  }, [check])

  return (
    <>
      {console.log("alert: ", isAlert)}
      {isAlert !== "not" && check !== "not" ?
        <Alert className={
          check === "success" ? "alertt alertt-success" : "alertt alertt-error"
          // check === "warning" ? "alertt alertt-warning" :
          //   "alertt alertt-info"
        }
          variant="filled"
          severity={isAlert === "success" ? "success" : "error"} >

          {
            check === "success" ? sucMess : errMess
          }
        </Alert> :
        <></>
      }
    </>
  );
};

export default TopAlert;