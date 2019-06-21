import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {connect} from 'react-redux'
import { getIssues , resetIssue} from '../issues/actions';
import {bindActionCreators} from 'redux';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// const styles = {
//   root: {
//     flexGrow: 1,
//     marginTop: 63,
//     width:'100%',
//     position:'fixed',
//     backgroundColor: 'white'
//   },
// };


const styles = theme => ({
  root: {
    flexGrow: 1,
    width:'100%',
    top:'10%',
    position:'fixed',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '5%',
  },
  fab:{
    color: 'primary',
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  hover: {
    color:"#25479E",
    "&:hover": {
      backgroundColor: "#25479E",
      color:"white"
    }
  }
});



class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    const { getIssues } = this.props;
    getIssues(value,'ALL','1993');
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div >
      <AppBar className={classes.root} position="static" color="default">
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Latest" />
          <Tab label="Closed" />
          <Tab label="My Issues" />
        </Tabs>
      </AppBar>

      </div>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators ({
  getIssues
},dispatch)

export default connect(null,mapDispatchToProps)(withStyles(styles)(CenteredTabs));