import 'asset/css/authentication.css';
import { ILogin } from 'models/authentication';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { reducerType } from 'redux/reducers';
import Login from './Login';

const mapStateToProps = (state: reducerType) => {
  return {
    isLoading: state.global.isLoading,
  };
};

interface authProps {
  isLoading: boolean;
}

function Authentication(props: authProps) {

  let { url, path } = useRouteMatch();

  const [loginData, setLoginData] = useState<ILogin>({
    username: "hello",
    password: "123",
  })

  return (
    <div className="background">
      <Switch>
        <Route exact path={path}><Redirect to={`${url}/login`} /></Route>
        <Route path={`${path}/login`}><Login /></Route>
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps)(Authentication);