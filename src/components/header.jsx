import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { datas } from '../constants';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  flex: {
    flex: 1,
    marginLeft: 15,
    fontWeight: '800',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageMarked': {
        opacity: 1,
      },
    },
  },
  focusVisible: {},
  imageTitle: {
    position: 'relative',
    marginHorizontal: 12,
    fontSize: 16,
  },
  menuTitle: {
    fontSize: 14,
  },
  imageMarked: {
    opacity: 0,
    height: 4,
    width: '100%',
    borderRadius: 20,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -9,
    left: 0,
    transition: theme.transitions.create('opacity'),
  },
});

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="display1" color="inherit" className={classes.flex}>
            SAVO
          </Typography>
          {datas.HEADER_BUTTONS.map(item => (
            <ButtonBase
              focusRipple
              variant="fab"
              key={item.id}
              className={classes.button}
              focusVisibleClassName={classes.focusVisible}
              onClick={() => props.history.push(item.navigate)}
              style={{
                width: 150,
              }}
            >
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {item.title}
                <span className={classes.imageMarked} />
              </Typography>
            </ButtonBase>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const a = withStyles(styles)(Header);
export default withRouter(a);
