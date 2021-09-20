import React, { useState, useEffect, memo,lazy, Suspense } from 'react';
import Images from 'config/images';
import moment from 'moment';
import { useDispatch, connect } from 'react-redux';
import { useHistory, Switch, Route, NavLink } from "react-router-dom";
import { reducerType } from 'redux/reducers';
import useStyles from './styles';
import Loading from 'modules/Components/Loading';
import {
  ListItemIcon,
  ListItemText,
  ListItem,
  IconButton,
  List,
  Drawer,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import themeConfig from 'config/theme'
import { Texts } from 'modules/Components'
import { routes } from 'routers/routes';

import { LOGOUT } from 'redux/reducers/authentication/actionTypes';
/*import SharingsPage from './Sharings/Sharings-page';
import Dashboard from './Dashboard';
import Courses from './Courses'
import { LOGOUT } from 'redux/reducers/authentication/actionTypes';
import QuestionBank from './QuestionBank';
import AccountTable from './Account Table';
import Sharings from './Sharings';
import Profile from '../Account/Profile';
import ShowCourse from '../Menu/Courses/ShowCourse/index';
*/
// const SharingsPage = lazy(() => import('./Sharings/Sharings-page'));
const Dashboard = lazy(() => import('./Dashboard'));
const Courses = lazy(() => import('./Courses'));
const QuestionBank = lazy(() => import('./QuestionBank'));
const AccountTable = lazy(() => import('./Account Table'));
const Sharings = lazy(() => import('./Sharings'));
const Profile = lazy(() => import('../Account/Profile'));
const ShowCourse = lazy(() => import('../Menu/Courses/ShowCourse/index'));
const Report = lazy(() => import('modules/Components/Report'));






const mapStateToProps = (state: reducerType) => {
  return {

  };
};

interface IMenuPage {
  lable: string,
  icon: string,
  iconActive: string,
  href: string
}

const Menu = memo(() => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [open, setOpen] = useState(true);
  const pathName = history.location.pathname;

  useEffect(() => {
    if (pathName === "/") history.push(`/dashboard`);
  }, []);


  const handleDrawer = () => {
    setOpen(!open);
  };

  const menuPage: IMenuPage[] = [
    {
      lable: "Dashboard",
      icon: Images.icDashboard,
      iconActive: Images.icDashboard,
      href: routes.menu.dashboard,
    },
    {
      lable: "Create Course",
      icon: Images.icCreateCourses,
      iconActive: Images.icCreateCourses,
      href: routes.menu.createcourse,
    },
    {
      lable: "Show Course",
      icon: Images.icShowCourse,
      iconActive: Images.icShowCourse,
      href: routes.menu.courses.default,
    },
    {
      lable: "Question",
      icon: Images.icQuestionBank,
      iconActive: Images.icQuestionBank,
      href: routes.menu.questionBank,
    },
    {
      lable: "Sharings",
      icon: Images.icSharings,
      iconActive: Images.icSharings,
      href: routes.menu.sharings,
    },
    {
      lable: "Account List",
      icon: Images.icAccountList,
      iconActive: Images.icAccountList,
      href: routes.menu.account,
    },
    {
      lable: "Profile",
      icon: Images.icProfile,
      iconActive: Images.icProfile,
      href: routes.menu.profile,
    },
    {
      lable: "Report",
      icon: Images.icReport,
      iconActive: Images.icReport,
      href: routes.menu.report,
    },
    
  ]

  const handleSubmenu = (item: IMenuPage) => {
    history.push(item.href)
  }

  const isActive = (item: IMenuPage) => {
    return pathName.includes(item.href)
  }
  const handleLogout = () => {
    dispatch({
      type: LOGOUT
    })
    history.push('/auth')
  };
  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer,{
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          paperAnchorLeft: classes.customAnchorLeft,
        }}
      >
        <div className={clsx(classes.toolbar, !open && classes.toolbarSmall)}>
          <IconButton onClick={handleDrawer} classes={{ root: classes.iconBtn }} >
            <MenuIcon className={classes.menuIcon} />
            <Texts size={themeConfig.fSize16} fontWeight={themeConfig.fWeight600} styles={clsx(classes.ml12, !open && classes.hidden)}>
              Vinova's Academy
            </Texts>
          </IconButton>
        </div>
        <div className={classes.profileSection}>
          <img className={clsx(classes.avatar, !open && classes.smallAvatar)} src={Images.avatarLogin} alt={Images.avatarLogin} />
          <div className={clsx(classes.miniProfile, !open && classes.hidden)}>
            <Texts size={themeConfig.fSize14} fontWeight={themeConfig.fWeight600}>ZhengLong</Texts>
            <NavLink exact to="/profile" style={{ textDecoration: 'none'}} >
            <Texts size={themeConfig.fSize12} styles={classes.w90}>View Profile</Texts>
            </NavLink>          
          </div>
        </div>
        <List>
          {menuPage.map((item, index) => (
            <ListItem
              key={index}
              id={`el-${index}`}
              button
              onClick={() => handleSubmenu(item)}
              classes={{
                root: clsx(classes.listItemActive,
                  !open && classes.listItemSmall,
                  isActive(item) && classes.activeClass
                ),
                gutters: classes.gutters
              }}
            >
              <ListItemIcon classes={{ root: classes.listItemIcon }}>
                <img
                  src={pathName.includes(`${item.href}`) ? item.iconActive : item.icon}
                  alt={pathName.includes(`${item.href}`) ? item.iconActive : item.icon}
                />
              </ListItemIcon>
              <Texts
                styles={!open && classes.hidden}
                size={themeConfig.fSize14}
                fontWeight={isActive(item) ? themeConfig.fWeight600 : themeConfig.fWeight400}
              >
                {item.lable}
              </Texts>
            </ListItem>
          ))}
        </List>
        <Divider style={{background:'#fff',marginLeft:'10px',marginRight:'10px'}}/>
        <List >
        <ListItem
          button
          onClick={handleLogout}
          classes={{
                root: clsx(classes.listItemActive,
                  !open && classes.listItemSmall,
                ),
                gutters: classes.gutters
              }}
        >
          <ListItemIcon 
          classes={{ root: classes.listItemIcon }} 
          style={{color:'#fff'}}
          >
            <ExitToAppSharpIcon fontSize="small"/>
          </ListItemIcon>
            <Texts
                  styles={!open && classes.hidden}
                  size={themeConfig.fSize14}
                  fontWeight={themeConfig.fWeight400}
            >
                  Log out
            </Texts>
          </ListItem>
      </List>
      </Drawer>
      <main
        className={classes.content}
      >
      <div
      className={clsx({
          [classes.shiftTextRight]: open,
          [classes.shiftTextLeft]: !open,
        })}
      >
      <Suspense
    fallback={
      <>
        <Loading />
      </>
    }
  >
        <Switch>
          <Route exact path={routes.menu.dashboard} component={Dashboard}/>
          <Route exact path={routes.menu.createcourse} component={Courses} />
          <Route exact path={routes.menu.questionBank} component={QuestionBank} />
          <Route exact path={routes.menu.account} component={AccountTable}/>
          <Route path={routes.menu.courses.default} component={ShowCourse}/>
          <Route exact path={routes.menu.profile} component={Profile}/>
          <Route exact path={routes.menu.sharings} component={Sharings}/>
          <Route path={routes.menu.sharings} component={Sharings}/>
          <Route path={routes.menu.report} component={Report}/>

        </Switch>
          </Suspense>

      </div>
      </main>
    </>
  )
})

export default connect(mapStateToProps)(Menu);



