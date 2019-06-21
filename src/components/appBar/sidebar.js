import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Header from './appBar';
import {Link} from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getIssues} from '../issues/actions';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'white'

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});


class NestedList extends React.Component {

  state = {
    open: false,
    dash: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  dashClick = () => {
    this.setState(state => ({ dash: !state.dash }));
  };


  render() {

    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
      <Header isAuth={this.props.isAuth} logoutHandler={this.props.logoutHandler}/>
      </AppBar>
      <Drawer 
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
             
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
       

        <List >
           <ListItem component={Link} to='/' button style={{ textDecoration: 'none', color: '#25479E' }}>
           <strong>Home</strong></ListItem>
            <ListItem component={Link} to='/dashboard' button style={{ textDecoration: 'none', color: '#25479E' }} onClick={this.dashClick}>
             <strong>Divya</strong></ListItem>
            {/* <Collapse in={this.state.dash} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem button component={Link} to='/issueReports' className={classes.nested}>
            <ListItemText inset primary={<Typography style={{textDecoration: 'none', color: '#25479E' }}>Issue Reports</Typography>}></ListItemText>
            </ListItem>
            <ListItem button component={Link} to='/civicissues' className={classes.nested}>
            <ListItemText inset primary={<Typography style={{textDecoration: 'none', color: '#25479E' }}>Area Wise Reports</Typography>}></ListItemText>
            </ListItem>
            </List>
           </Collapse>  */}


            <ListItem button onClick={this.handleClick} style={{ textDecoration: 'none', color: '#25479E' }}><strong>Categories</strong>{this.state.open ? <ExpandLess /> : <ExpandMore />}</ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              <Link style={{ textDecoration: 'none', color: '#25479E' }} to='/road'>
                  <ListItem button className={classes.nested} onClick={()=>this.props.getIssues('road')}>
                    <ListItemText inset primary={<Typography style={{textDecoration: 'none', color: '#25479E' }}>Road</Typography>} />
                  </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#25479E' }} to='/pollution'>
                  <ListItem button className={classes.nested} onClick={()=>this.props.getIssues('pollution')}>
                    <ListItemText inset primary={<Typography style={{textDecoration: 'none', color: '#25479E' }}>Pollution</Typography>} />
                  </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#25479E' }} to='/garbage'>
                  <ListItem button className={classes.nested} onClick={()=>this.props.getIssues('garbage')}>
                    <ListItemText inset primary={<Typography style={{textDecoration: 'none', color: '#25479E' }}>Garbage Dumping</Typography>} />
                  </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#25479E' }} to='/water'>
                  <ListItem button className={classes.nested} onClick={()=>this.props.getIssues('water')}>
                    <ListItemText inset primary={<Typography style={{textDecoration: 'none', color: '#25479E' }}>Water Stagnation</Typography>} />
                  </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#25479E' }} to='/other'>
                  <ListItem button className={classes.nested} onClick={()=>this.props.getIssues('other')}>
                    <ListItemText inset primary={<Typography style={{textDecoration: 'none', color: '#25479E' }}>Others</Typography>} />
                  </ListItem>
                </Link>
            </Collapse>

            <ListItem component={Link} to='/myreportList' button style={{ textDecoration: 'none', color: '#25479E' }}>
            <strong>Admin</strong>
            </ListItem>
            <ListItem button style={{ textDecoration: 'none', color: '#25479E' }}>
            <Link to='./blog' style={{ textDecoration: 'none', color: '#25479E' }}><strong>About Us</strong></Link></ListItem>
            {/* <ListItem button style={{ textDecoration: 'none', color: '#25479E' }}><strong>Logout</strong></ListItem> */}
         </List> 


      </Drawer>
    </div>
  );
  }
  
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators ({
  getIssues
},dispatch)

export default connect(null,mapDispatchToProps)(withStyles(styles)(NestedList));
