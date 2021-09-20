import React, { useState, useEffect } from "react";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { connect } from "react-redux";
import { reducerType } from "redux/reducers";
import { useHistory } from "react-router-dom";
import { unmountComponentAtNode } from "react-dom";

import { Toolbar, AppBar, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const mapStateToProps = (state: reducerType) => {
  return {
    isOpenTopAlert: state.global.isOpenTopAlert,
  };
};
interface timerProps {
  hours: number;
  minutes: number;
  seconds: number;
}
function show2digits(num, len = 2) {
  return `${num}`.padStart(len, "0");
}
function Timer(hoursMinSecs: timerProps) {
  const classes = useStyles();
  const { hours, minutes, seconds } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

  let history = useHistory();

  const time = () => {
    if (hrs === 0 && mins === 0 && secs === 0) finish();
    if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };
  useEffect(() => {
    let myInterval = setInterval(time, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const finish = () => {
    // redirect to reuslt page
    history.push("/result");
  };
 
  return (
    <div>
      <AppBar position="static" classes={{ root: classes.root }}>
        <Toolbar>
          <QueryBuilderIcon />
          <Typography variant="h5" className={classes.timer}>
            {show2digits(hrs)}:{show2digits(mins)}:{show2digits(secs)}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(mapStateToProps)(Timer);
