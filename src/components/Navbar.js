import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link as ReachLink } from '@reach/router';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(4),
  },
  padRight: {
    marginRight: theme.spacing(2),
  },
}));

const routes = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Name Generator',
    route: '/name-generator',
  },
];

export const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.padRight}>
          DM Tools
        </Typography>
        {routes.map((route) => (
          <Button to={route.route} component={ReachLink}>
            {route.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};
