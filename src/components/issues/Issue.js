import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';

const styles =theme => ({
  card: {
    maxWidth: 500,
    marginTop: '90px',
    padding: '20px',
    backgroundColor: 'white',
    align:"center"
  },
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
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

class Issue extends Component {
  render() {
    const { classes, issue } = this.props;
    const status = 'C';
 return (
<div>
<Grid container item spacing={0} justify="center" align = "center" >
  <Grid item xs={12} justify="center">
      <Card className={classes.card} raised = 'true'>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Category" style={{backgroundColor:'#3f51b5'}}>
                      {issue.reportType.charAt(0)}
                    </Avatar>
                  }
                  action={
                    <IconButton>
                    </IconButton>
                  }
                  title={issue.reportTitle}
                  subheader= {issue.reportCreatedDate}
                />
          <Link to={`/${issue.id}`}>
            <CardMedia
              style = {{ height:0, paddingTop: '56%',padding:'170px',maxWidth: 500}}
              image={issue.imageUrl}
              title={issue.heading}
            />
          </Link>
          <CardContent >
            <Typography variant="subtitle2" gutterBottom>
              {issue.address}
            </Typography>
          </CardContent>
          {status == 'C'&&
             <CardActions>
             <Grid item xs={3}>
               <Paper className={classes.paper}>{issue.status}</Paper>
             </Grid>
             </CardActions>
          
        }
  
        </Card>
      </Grid>
    </Grid>
  </div>


)}
            }

export default withStyles(styles)(Issue);


Issue.propTypes = {
    issue: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  };
  
  export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;