import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import Issue from './Issue';
import {bindActionCreators} from 'redux'
import { getIssues ,resetIssue} from './actions';
import CenteredTabs from '../appBar/CenteredTabs';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import SidebarResponsive from '../appBar/sidebarResponsive';
const styles = theme => ({
  fab:{
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    position:'fixed',
  },
});
class IssueList extends PureComponent {
  constructor(props) {
    super(props);
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      //this.props.getIssues(0,'MR')
    }
  }
  this.myRef = React.createRef() ;
}

  async  componentDidMount() {
    const {isIssuesLoaded,getIssues,tab} = this.props;
    if(this.props.category =='MR'){
      getIssues(tab,'MR')
    }
    if(this.props.category =='CF'){
      getIssues(tab,'CF')
    }
    if(this.props.category =='GP'){
      getIssues(tab,'GP')
    }
    if(this.props.category =='RT'){
      getIssues(tab,'RT')
    }
    if(this.props.category =='OT'){
      getIssues(tab,'OT')
    }
    else{
      getIssues(tab,'ALL')
    }

   }

   componentDidUpdate(){
   // alert("in update")
    //this.myRef.current.scrollTo(0, 0);
    window.scrollTo(0, 0)
   }

 render() {
  const { classes } = this.props;
    return (
      <div ref={this.myRef}>
        <SidebarResponsive userType="EM"/>
      <CenteredTabs />
        {this.props.issues.map(issue => 
        <div>
          <Issue key={issue.id} issue={issue}/>
        </div>
      )}
      <Link to={`/myreport`}>
        <Fab className={classes.fab} color='primary' >
              <AddIcon/>
        </Fab>
      </Link>
       </div>
    );
  }
}
const mapStateToProps = state =>({
  issues : state.issues.issues,
  isIssuesLoaded : state.issues.isIssuesLoaded,
  tab:state.issues.tab
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  getIssues,
  resetIssue
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(IssueList));
