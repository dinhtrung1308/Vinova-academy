import { Button, FormControl, Grid, IconButton, Input, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
//import 'asset/css/authentication.css';
import images from 'config/images';
import { TopAlert } from 'modules/Components';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { reducerType } from 'redux/reducers';
import { LOGIN_REQUEST } from 'redux/reducers/authentication/actionTypes';
import { routes } from 'routers/routes';
import useStyles from '../styles';

const mapStateToProps = (state: reducerType) => {
  return {
    isOpenTopAlert: state.global.isOpenTopAlert,
    clientCode: state.authentication.clientCode,
    profile: state.authentication.profile,
  };
};

type FormLogin = {
  username: string;
  password: string;
}
interface loginProps {
  isOpenTopAlert: string,
  clientCode: string;
  profile: {
    id: string,
    is_admin: boolean,
    status: string,
  }
}

function Login(props: loginProps) {

  const { isOpenTopAlert, clientCode, profile } = props;

  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const { register, formState: { errors }, handleSubmit } = useForm<FormLogin>();

  const [show, setShow] = useState(false);

  const handleClickShowPassword = () => {
    setShow(!show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (data: FormLogin) => {
    console.log(data);
    await dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email: data.username,
        password: data.password,
      }
    })

  }
  // đã đăng nhập thì không vào lại /auth/login
  useEffect(() => {
    if (clientCode !== '') {
      profile.is_admin ?
        history.push(routes.menu.default) :
        history.push(routes.menu.guide);
    }
  }, [clientCode])

  return (

    <Grid className={classes.login} container>

      <TopAlert
        sucMess="Login successfully"
        errMess="Email or Password is not incorrect"
        check={isOpenTopAlert}
      />

      <img className={classes.avatar} src={images.avatarLogin} alt="" />
      <h1>WELCOME</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className={classes.margin}>
          <Input
            classes={{ underline: "underline", error: "error" }}
            className={classes.textField}
            id="username"
            {...register('username', {
              required: "Username must be required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+((@vinova.com.sg)|(@vinova.sg)|(@gmail.com))$/,
                message: 'Invalid email address'
              }
            })}

            placeholder="Email@vinova.com.sg"
          />
          {errors.username && <div className={classes.warning}>{errors.username.message}</div>}
        </FormControl>

        <FormControl className={classes.margin}>
          <Input
            classes={{ underline: "underline" }}
            className={classes.textField}
            id="password"
            type={show ? 'text' : 'password'}

            {...register('password', {
              required: "Password must be required",
              minLength: {
                value: 4,
                message: "Password must be longer than 4 characters"
              }
            })}

            placeholder="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password && <div className={classes.warning}>{errors.password.message}</div>}
        </FormControl>

        <Button className={classes.loginSubmit} type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  );
}

export default connect(mapStateToProps)(Login);