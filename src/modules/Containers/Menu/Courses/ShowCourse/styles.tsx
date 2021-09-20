import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import themeConfig from 'config/theme';

const AntTabs = withStyles({
  root: {
    paddingLeft: '20px',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
  
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontSize: themeConfig.fSize16,
      fontWeight: themeConfig.fWeight500,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: themeConfig.fWeight500,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    paddingLeft: theme.spacing(4)
  },
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(2),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    borderBottom: '1px solid #e7e7e7',
  },
  button: {
    backgroundColor: themeConfig.mainColor,
    content: 'center',
    height: '35px',
    width: '180px',
    '&:hover': {
      backgroundColor: themeConfig.lightGreen,
    },
  },
}));

export { useStyles, AntTab, AntTabs }