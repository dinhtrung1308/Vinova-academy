import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import { chartData } from './data';

const mapStateToProps = (state: reducerType) => {
  return {
    isOpenTopAlert: state.global.isOpenTopAlert,
  };
};

// * Interfaces
interface graphProp {}

// Components

function Graph(props: graphProp) {
  const classes = useStyles();

  return (
    <Paper>
      <Chart data={chartData}>
        <ValueScale name='totalScore' />
        <ValueScale name='currentScore' />

        <ArgumentAxis />
        <ValueAxis
          scaleName='totalScore'
          showGrid={false}
          showLine={true}
          showTicks={true}
        />
        <ValueAxis
          scaleName='currentScore'
          showGrid={false}
          showLine={true}
          showTicks={true}
        />

        <BarSeries
          name='Total Score'
          valueField='totalScore'
          argumentField='subject'
          scaleName='totalScore'
        />

        <BarSeries
          name='Current Score'
          valueField='currentScore'
          argumentField='subject'
          scaleName='currentScore'
        />
      </Chart>
    </Paper>
  );
}

export default connect(mapStateToProps)(Graph);
