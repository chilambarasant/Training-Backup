import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter as Router, Route,Switch,Redirect}from 'react-router-dom'
import { save, load } from "redux-localstorage-simple"
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import SignIn from './components/signIn/signIn';
import SignUp from './components/signUp/signUp';
import SidebarResponsive from './components/appBar/sidebarResponsive';
import MyReports from './components/reports/MyReports';
import IssueList from './components/issues/IssueList';
import IssueDetail from './components/issues/IssueDetail';
import rootReducer from './rootReducer';
import ReportList from './components/reports/reportList';
import BarChart from './components/reports/BarChart';
import Login from './components/appBar/Login';



const middleware = [logger,thunk]

const store = createStore(
  rootReducer,
   load(),
  
composeWithDevTools(applyMiddleware(...middleware,save()))
  )

  function PrivateRoute({ component: Component, authed, ...rest }) {
   console.log(authed + 'private route')
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component/> : <Redirect to={{ pathname: '/signIn', state: { from: props.location } }} />}
      />
    )
  }

class App extends Component {

  state = {
    authed: false,
    report:false,
  }

  logoutHandler = () => {
   
    this.setState({
      authed: false,
    })

    console.log(this.state.authed + 'logout')
  }

  loginHandler = () => {
   
    this.setState({
      authed: true,
    })

    
  }

  reportHandler = () => {
   
    this.setState({
      report: true,
    })

    
  }
  registerHandler = () => {
    this.setState({
      authed: true,
    })
  }

  
  render() {
    console.log(this.state.authed + 'login')
    return (

       <Provider store={store}>

        <Router>
          <div className="App">
            <Switch>
            <Route exact path='/' render={props => <Login />}/>  
              <Route exact path='/issueList/:id' render={props => <IssueList category={0} {...props}  />}/>  
              {/* <Route authed={this.state.authed} path="/signUp" render={props => <SignUp registerHandler={this.registerHandler} />} />
              <Route authed={this.state.authed} path="/signIn" render={props => <SignIn loginHandler={this.loginHandler} />} /> */}
             <Route  path='/myreportList/AM' component={ReportList}/>			
              <Route  path='/dashboard' component={BarChart}/>
              <Route  path="/MR" render={props => <IssueList category={"MR"} />} />
              <Route  path="/CF" render={props => <IssueList category={"CF"} />} />
              <Route  path="/GP" render={props => <IssueList category={"GP"} />} />
              <Route  path="/RT" render={props => <IssueList category={"RT"} />} />
              <Route  path="/OT" render={props => <IssueList category={"OT"} />} />
              <Route path="/myreport" component={MyReports} />
              <Route path='/:id' component={IssueDetail}/>
            </Switch>
          </div>

        </Router>

      </Provider>

    );
  }
}

export default App;