import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,

    marginRight: theme.spacing.unit * 2,
    marginLeft: '150px',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 10,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#25479E'
  },
  inputRoot: {
    color: '#25479E',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 5,
    border: 0,
    color: "#25479E",
    height: 30,
    padding: "0 20px",
    marginLeft:"10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  }

});

class Header extends React.Component {
  state = {
   
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
   
    const { classes } = this.props;
    const {  isAuth, logoutHandler } = this.props;
    
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 0 0 0 black' }}>
          <Toolbar>
            <div style={{width:'60'}}>
            <Link to='/' style={{ textDecoration: 'none', color: '#25479E' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="https://i.ibb.co/BCdZhCX/Screenshot3.png" alt="LogoCitizen" border="1"/>
            {/* <Typography className={classes.title} variant="h5" color="inherit" noWrap>
              CITIZEN
            </Typography>
            <Typography className={classes.title} color="inherit" noWrap>
              Make Your Voice Heard
            </Typography> */}
            </Link>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Simply Search Here…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div>
            { isAuth ? null
              : <Link color="inherit" to='/signup' style={{ textDecoration: 'none', color: '#25479E' }}>
                <Button style={{ backgroundColor: 'inherit', border:'1px solid white'}} variant="h6" color="inherit" noWrap>
                  <strong>Register</strong>
                </Button>
            </Link>}
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              { isAuth ? 
               <Button style={{backgroundColor: 'inherit', border:'1px solid white'}} variant="h6" color="inherit" onClick={logoutHandler}><strong>Sign Out</strong></Button>
             :
              <Link color="inherit" to='/signin' style={{ textDecoration: 'none', color: '#25479E' }}>
                <Button style={{ backgroundColor: 'inherit', border:'1px solid white'}} variant="h6" color="inherit">
                  <strong>Sign in</strong>
                </Button>
              </Link>
              }
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
            <Link color="inherit" to='/myreport' style={{ textDecoration: 'none', color: '#25479E'}}>
              <Button style={{ backgroundColor: 'inherit', border:'1px solid white'}} variant="h6" color="inherit" noWrap>
                <strong>Write An Issue</strong>
              </Button>
            </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(Header);