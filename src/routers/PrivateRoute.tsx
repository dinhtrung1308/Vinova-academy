import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component : Component, isLoggedIn, ...rest }: any) => (
  
  <Route
    {...rest}
    render={(props: any) =>
      isLoggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
