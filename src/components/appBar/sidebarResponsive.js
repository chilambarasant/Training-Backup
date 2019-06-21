import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {bindActionCreators} from 'redux';
import { getIssues} from '../issues/actions';
import {Link} from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import logo from './LogoUniSolve.png';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  menuButton: {		
    marginRight: 20,		
    [theme.breakpoints.up('sm')]: {		
      display: 'none',		
    },		
  },
  hover: {
    color:"#25479E",
    "&:hover": {
      backgroundColor: "#25479E",
      color:"white",
    },
    image: {
    }
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  dashClick = () => {
    this.setState(state => ({ dash: !state.dash }));
  };
  
  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, tab } = this.props;
    const drawer = (
      <div>
          
        <div className={classes.toolbar} />
            <List >
                   
                    {this.props.userType == "EM" && 
                    <ListItem className={classes.hover} component={Link} to='/myreport' button style={{ textDecoration: 'none' }}>
                    <strong>Write An Issue</strong>
    </ListItem> }
                    {this.props.userType == "AM" && 
                    <ListItem className={classes.hover} component={Link} to='/dashboard' button style={{ textDecoration: 'none' }} onClick={this.dashClick}>

                    <strong>Dashboard</strong></ListItem>
                    
    }
 {this.props.userType == "AM" && 
                    <ListItem className={classes.hover} component={Link} to='/myreportList/AM' button style={{ textDecoration: 'none' }}>
                    <strong>Admin</strong>
                   </ListItem>
}
{this.props.userType == "EM" && 
                   <ListItem className={classes.hover} button onClick={this.handleClick} style={{ textDecoration: 'none' }}><strong>Categories</strong>{this.state.open ? <ExpandLess /> : <ExpandMore />}</ListItem>}
                 {this.props.userType == "EM" &&    <Collapse in={this.state.open} timeout="auto" unmountOnExit>

                        <Link style={{ textDecoration: 'none' }} to='/MR'>
                        <ListItem button className={classes.hover} onClick={()=>this.props.getIssues(tab,'MR')}>
                            <ListItemText inset primary={<Typography variant="subtitle2" style={{textDecoration: 'none' }}>Meeting Room</Typography>} />
                        </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/CF'>
                        <ListItem button className={classes.hover} onClick={()=>this.props.getIssues(tab,'CF')}>
                            <ListItemText inset primary={<Typography variant="subtitle2" style={{textDecoration: 'none' }}>Cafeteria</Typography>} />
                        </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/GP'>
                        <ListItem button className={classes.hover} onClick={()=>this.props.getIssues(tab,'GP')}>
                            <ListItemText inset primary={<Typography variant="subtitle2" style={{textDecoration: 'none' }}>Gym / Play Area</Typography>} />
                        </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/RT'>
                        <ListItem button className={classes.hover} onClick={()=>this.props.getIssues(tab,'RT')}>
                            <ListItemText inset primary={<Typography variant="subtitle2" style={{textDecoration: 'none' }}>Restroom</Typography>} />
                        </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/OT'>
                        <ListItem button className={classes.hover} onClick={()=>this.props.getIssues(tab,'OT')}>
                            <ListItemText inset primary={<Typography variant="subtitle2" style={{textDecoration: 'none' }}>Others</Typography>} />
                        </ListItem>
                       
                        </Link>
                    </Collapse>
                     }

<ListItem className={classes.hover} component={Link} to='/' button style={{ textDecoration: 'none' }}>
                    <strong>Sign Out</strong>
                    </ListItem>
            </List> 
        </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
            <MenuIcon/>
            </IconButton>
            <Link 
            to='/' style={{
            textDecoration: 'none',
            color: '#25479E' }}>

            <img 
            src={logo}
            className = {classes.image}
            alt="LogoUniSolve"/>

            </Link>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              // anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
const mapStateToProps = state =>({
  issues : state.issues.issues,
  isIssuesLoaded : state.issues.isIssuesLoaded,
  tab:state.issues.tab
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  getIssues
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ResponsiveDrawer));