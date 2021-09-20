import React, { lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { routes } from './routes'
import Loading from 'modules/Components/Loading';

import { CircularProgress } from '@material-ui/core';
import Menu from 'modules/Containers/Menu';
const Authentication = lazy(() => import('modules/Containers/Authentication'));
const Itest = lazy(() => import('modules/Containers/Itest'));
// const Itest = lazy(() => import('modules/Containers/ITest'));
// const Result = lazy(() => import('modules/Containers/ITest/Graph'));
const Guide = lazy(() => import('modules/Containers/Itest/Guide'));
// const Itest = lazy(() => import('modules/Containers/Itest'));
const Routes = (props) => (
  <Suspense
    fallback={
      <>
        <CircularProgress style={{ color: '#E9781C' }} />
      </>
    }
  >
    <Switch>

      <Route
        path={routes.authentication}
        component={Authentication}
      />
      {/* <PrivateRoute path={routes.itest} component={Itest} /> */}

      {/* <Route path={routes.menu.result} component={Result} /> 
      <Route path={routes.itest} component={Itest} /> */}
      {props.isLoggedIn &&
        <Route path={routes.menu.guide} component={Guide} />
      }
      {props.isLoggedIn &&
        <Route path={routes.itest} component={Itest} />
      }
      {props.isLoggedIn &&
        <Route
          path={routes.menu.default}
          component={Menu}
        />
      }

      <Redirect from='/' to={props.isLoggedIn ? routes.menu.default : routes.authentication} />
    </Switch>
  </Suspense>
);

export default connect(null)(Routes);
