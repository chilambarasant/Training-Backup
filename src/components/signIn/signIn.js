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
import {Redirect}from 'react-router-dom'

let imgUrl = '../images/banner.jpg'; 

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

class  SignIn extends React.Component {

  state = { 
    email: '',
    password: '',
    redirectToReferrer: false
 }
 handleChange = input => e => {
     
     this.setState({
         [input] : e.target.value
     })

 }
 handleSubmit = (e) =>{
    e.preventDefault();
    this.props.loginHandler()
    this.setState({
       redirectToReferrer : true
   })
 }

render()
{
  const { classes} = this.props;
  const { from } =  { from: { pathname: '/' } }
  const { redirectToReferrer } = this.state;

  if (redirectToReferrer === true) {
    return <Redirect to={from} />
  }

  return (
    <main className={classes.main}>
      <div className = 'Component-Bg' 
        style = {{ backgroundImage: 'url(' + imgUrl + ')', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}>
      </div>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
        Sign In
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input onChange={this.handleChange('email')} id="email" name="email" value={this.state.email} autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" value={this.state.password} onChange={this.handleChange('password')}
            type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Sign In
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}
SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);