import React from 'react';
import LoadingIcon from'asset/images/loading.gif';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
const mapStateToProps = (state: reducerType) => {
  return {
    isLoadingScreen: state.loadingScreen.isLoadingScreen,
  };
};

interface loadingProps {
  isLoadingScreen: boolean;
}
function Loading(props: loadingProps) {
  const classes = useStyles();
  return (
      <div className={classes.loading} >
        <img src ={LoadingIcon} alt="loading" className={classes.icon} />
      </div>
  );
}
export default connect(mapStateToProps)(Loading);
