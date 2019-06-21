import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

const styles = theme => ({
    side: {
        position: 'flex',
        margin: '64px 0 0 0',
        width: '18%',
        height:'100%',
        backgroundColor: '#011d42'

        
      },
      menuItem: {
        color: "white"

      }
  });
 
class Sidebar extends React.Component
{
render()
{
    const { classes } = this.props;
    return(
  <div>
        <AppBar className={classes.side}>
        </AppBar>
         </div>
    );
}
 
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(Sidebar);;