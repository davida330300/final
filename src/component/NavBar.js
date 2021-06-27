import React from 'react'
import { useHistory } from 'react-router-dom';
import { Switch, Route, HashRouter, withRouter } from "react-router-dom"

import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import HomeIcon from '@material-ui/icons/Home';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';


import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from "react-scroll"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function NavBar() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Focus.io
          </Typography>
        </Toolbar>
      </AppBar>
      <HashRouter>
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
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>


          <List>
          <ListItem button>
            <ListItemIcon>
                <Link to="Head" class="button" smooth={true} duration={500}>
                  <HomeIcon />
                  <ListItemText primary=" Top" />
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button key="Todos">
              <ListItemIcon>
                <Link to="Todos" class="button" smooth={true} duration={500}>
                  
                  <PlaylistAddCheckIcon />
                  <ListItemText primary=" Todos" />
                </Link>
                
              </ListItemIcon>

            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <Link to="Clock" class="button" smooth={true} duration={500}>
                  <AccessAlarmIcon />
                  <ListItemText primary=" Alarm" />
                
                </Link>
              </ListItemIcon>
            </ListItem>

          </List>
        </Drawer>
        {/* <Switch>
        <PlaylistAddCheckIcon ></PlaylistAddCheckIcon>
        <AccessAlarmIcon></AccessAlarmIcon>
        <NaturePeopleIcon></NaturePeopleIcon>
      </Switch> */}
      </HashRouter>
    </div>
    /* <BottomNavigation>
      <BottomNavigationAction label="Todos" value="Todos" icon={<PlaylistAddCheckIcon />} />
      <BottomNavigationAction label="Clock" value="Clock" icon={<AccessAlarmIcon />} />
      <BottomNavigationAction label="Tree" value="Tree" icon={<NaturePeopleIcon />} />

    </BottomNavigation> */
  );
}
