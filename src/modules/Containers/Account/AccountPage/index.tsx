import React from 'react';
import clsx from 'clsx';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Menu, ListItem, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import AccountTable from '../../Menu/Account Table/index';
import Profile from '../Profile';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from 'redux/reducers/authentication/actionTypes';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core/styles';

import QuestionBank from 'modules/Containers/Menu/QuestionBank';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';



export default function Account() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

  };
  const handleLogout = () => {
    dispatch({
      type: LOGOUT
    })
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink exact to="/account" style={{ textDecoration: 'none', color: '#0F0F0F' }} >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </NavLink>
      <NavLink exact to="/" style={{ textDecoration: 'none', color: '#0F0F0F' }} >
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </NavLink>
    </Menu>
  );
  const location = useLocation();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Paper square={true} style={{ width: '74px', marginLeft: '-25px', marginRight: '24px', backgroundColor: '#2EB183', marginTop: '0px', marginBottom: '0px', }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              style={{ color: '#fff', padding: '20px' }}
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          </Paper>


          <Typography variant="h6" className={classes.title} style={{ color: '#2EB183' }} >
            Account
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            style={{ color: "#2EB183" }}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <MenuIcon className={classes.color} /> : <MenuIcon className={classes.color} />}
          </IconButton>
          <Typography variant="h6" className={clsx(classes.color, { [classes.title]: open })} >
            Vinova 's Academy
          </Typography>

        </div>
        <Divider />
        <List>
          <NavLink exact to="/account" activeClassName={classes.menuLinkActive} style={{ textDecoration: 'none' }} >
            <ListItem button key={'Profile'} style={{ padding: '15px' }}>
              <ListItemIcon className={classes.color}>{<PersonIcon />}</ListItemIcon>
              <ListItemText primary={'Profile'} className={classes.color} />
            </ListItem>
          </NavLink>
          <NavLink to="/account/accountlist" activeClassName={classes.menuLinkActive} style={{ textDecoration: 'none' }}>
            <ListItem button key={'Account List'} style={{ padding: '15px' }}>
              <ListItemIcon className={classes.color}>{<FormatListNumberedIcon />}</ListItemIcon>
              <ListItemText primary={'Account List'} className={classes.color} />
            </ListItem>
          </NavLink>
          <NavLink to="/account/questionbank" activeClassName={classes.menuLinkActive} style={{ textDecoration: 'none' }}>
            <ListItem button key={'Question Bank'} style={{ padding: '15px' }}>
              <ListItemIcon className={classes.color}>{<AccountBalanceIcon />}</ListItemIcon>
              <ListItemText primary={'Question Bank'} className={classes.color} />
            </ListItem>
          </NavLink>

        </List>

      </Drawer>
      {renderMenu}

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* {location.pathname === "/account/accountlist"? <AccountList/>:<Profile/>} */}
        {
          location.pathname === "/account/accountlist" ? <AccountTable /> :
            location.pathname === "/account/questionbank" ? <QuestionBank /> :
              <Profile />
        }
      </main>
    </div>
  );
}
