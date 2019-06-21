import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { resetIssue } from '../issues/actions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles =theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.unimoni.com/images/joomlart/slideshow/banner-home.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {

  state ={
    redirectToReferrer:false,
    userName: '',
    role:''
  }
  async  componentDidMount() {
    this.state.role = '';
   }

  handleSubmit  = ()=>{
  
    const password = this.state.password;
    const email = this.state.email;


      axios.get(`http://localhost:8085/login`,{params: {
        email,
        password
      }})
          .then(res => {
            this.setState({
              redirectToReferrer : true,
              role:res.data.results.userType
            })
          })

  }
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }
  render() {
    const {classes } = this.props;
    const {redirectToReferrer} =this.state;
// const { from } = this.props.location.state || { from: { pathname: '/' } }
  
// if (redirectToReferrer === true){
//   return <Redirect to='./Checkout'/>
// }
if (redirectToReferrer === true){
  if(this.state.role === 'AM'){
    window.location.href = '/myreportList/AM'
  }else if(this.state.role === 'EM'){
    window.location.href = '/issueList/EM'
  }
}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}

<Avatar className={classes.avatar} src='./favicon.png' />
          <Typography component="h1" variant="h7" color="primary">
            UniSolve
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange = {this.handleChange('email')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {this.handleChange('password')}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
 }
}

const mapDispatchToProps = dispatch => bindActionCreators ({
  resetIssue
},dispatch)

export default connect(null,mapDispatchToProps)(withStyles(styles)(Login));