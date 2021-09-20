import React, { useEffect, useState } from 'react';
import { History } from 'history';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import Routes from 'routers';

import { connect } from 'react-redux';
import { reducerType } from 'redux/reducers';
import { setToken } from 'services/configApi/configVinovaApi';

const AppContainer = styled.div`
  height: 100%;
`;
console.log('process.env.ENV: ', process.env);
const mapStateToProps = (state: reducerType) => {
  return {
    isOpenTopAlert: state.global.isOpenTopAlert,
    clientCode: state.authentication.clientCode
  };
};

type AppProps = {
  history: History;
  isOpenTopAlert: string;
  clientCode: string
};

const App = ({ history, clientCode }: AppProps) => {
  console.log('clientCode:', clientCode);
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(clientCode));

  useEffect(() => {
    setIsLoggedIn(Boolean(clientCode))
    setToken(`Bearer ${clientCode}`)

  }, [clientCode])

  return (
    <AppContainer>
      <ConnectedRouter history={history}>
        <Routes isLoggedIn={isLoggedIn} />
      </ConnectedRouter>
    </AppContainer>
  );
};

export default connect(mapStateToProps)(App);
