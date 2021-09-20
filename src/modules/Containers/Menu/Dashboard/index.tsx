import React, { useState, useEffect, memo } from 'react';
import Images from 'config/images';
import moment from 'moment';
import { useDispatch, connect } from 'react-redux';
import { useHistory, Switch, Route } from "react-router-dom";
import { reducerType } from 'redux/reducers';
import useStyles from './styles';
import {
  ListItemIcon,
  ListItemText,
  ListItem,
  IconButton,
  List,
  Drawer,
  Divider,
  Grid
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import themeConfig from 'config/theme'
import { Texts } from 'modules/Components'
import { routes } from 'routers/routes';

const mapStateToProps = (state: reducerType) => {
  return {

  };
};

interface IDashboard {

}

const Dashboard = memo((props: IDashboard) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const pathName = history.location.pathname;

  return (
    <>

    </>
  )
})

export default connect(mapStateToProps)(Dashboard);
