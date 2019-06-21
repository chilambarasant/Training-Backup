import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getIssue,resetIssue } from './actions';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import SidebarResponsive from '../appBar/sidebarResponsive';

const styles =theme => ({
  card: {
    maxWidth: 700,
    marginTop: 100,
    marginBottom: 20,
  },
  media: {
    height: 300,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'Primary',
    backgroundColor: '#4c940c',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
});

class IssueDetail extends Component {
  
  async componentDidMount() {
  const id =  this.props.match.params.id
   this.props.getIssue(id)
  }
  componentWillUnmount() {
    this.props.resetIssue()
  }




  render() {
    const {classes, issue } = this.props;
    if(!issue.id) 
    return null;


    
    return (
      <div>
         <SidebarResponsive userType="EM"/>
        <Grid container justify="center" align='center'  >
          <Grid item xs={10}>
            <Card className={classes.card} raised='true'>
              <CardMedia
                className={classes.media}
                image={issue.imageUrl}
                title={issue.reportTitle}
                subheader="September 14, 2016"
              />
              <CardContent>
              <Typography variant="h6" gutterBottom>
                {issue.reportTitle} 
                </Typography>
                <Typography variant="caption" gutterBottom>
                {issue.reportCreatedDate}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                {issue.reportType}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {issue.reportDesc}
                </Typography>  
              </CardContent>
              <Divider/>
              <CardActions>
              <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={16}>
                  <Grid item xs>
                    <Typography variant="button" display="block">{issue.status}</Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Grid item xs={16}>
                <div style={{ borderLeft: '0.01em solid #e8e8e8',height:'5em', padding: '0.5em' }}>
                <Typography variant="button" display="block" align="left" gutterBottom="true" color="primary">
                  Admin :
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                    {issue.comments}
                </Typography>
                </div>
              </Grid>

              
              </CardActions>
              <Grid item xs={16}>
              
                </Grid>
            </Card>
            
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  issue : state.issues.issue,
  isIssueLoaded : state.issues.isIssueLoaded
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  getIssue,
  resetIssue
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(IssueDetail));