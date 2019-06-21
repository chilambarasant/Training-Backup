import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {BrowserRouter as Redirect}from 'react-router-dom'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    backgroundColor: '#37A3EC',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: '#37A3EC',
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#37A3EC',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: '#37A3EC',
  },
});



class SignUp extends React.Component {

  state = { 
    name: '',
    email: '',
    mobileNumber: '',
    gender: '',
    DOB: '',
    location: '',
    redirectToReferrer: false
 }

 handleChange = input => e => {
     
     this.setState({
         [input] : e.target.value
     })

 }

 handleSubmit = (e) =>{
    e.preventDefault();
    this.props.registerHandler()
    this.setState({
       redirectToReferrer : true
   })
  }

  render()
{
  const { from } = { from: { pathname: '/' } }
  console.log (from)
  const { redirectToReferrer } = this.state

  if (redirectToReferrer === true) {
    return <Redirect to={from} />
  }
   const {classes} = this.props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
        Sign Up
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Name</InputLabel>
            <Input id="name" name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Mobile Number</InputLabel>
            <Input name="mobileNumber" type="mobileNumber" id="mobileNumber" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Gender</InputLabel>
            <Input name="gender" type="gender" id="gender" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>DOB</InputLabel>
            <Input name="DOB" type="DOB" id="DOB" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Location</InputLabel>
            <Input name="location" type="location" id="location" />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign Up
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}
SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);