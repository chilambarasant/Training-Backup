import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { approvalReport, rejectReport, removeReportList } from './actions';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Delete from '@material-ui/icons/Delete';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Image from 'material-ui-image'
//import Dialog from '@material-ui/Dialog';
import logo from './water.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Pagination from './Pagination';
import SearchBar from './Search';
import { sizing } from '@material-ui/system';

import SidebarResponsive from '../appBar/sidebarResponsive';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Grid,
  TextField
} from "@material-ui/core";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
 
  const top = 50 + rand();
  const left = 50 + rand();
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({

      root: {
        width: '80%',
        marginTop: theme.spacing.unit * 5,
        marginLeft: '250px',
        overflowX: 'auto',
      },
      table: {
        width: '850',
      },
      header: {
        marginTop: '100px',
        marginLeft: '220px',
      },
      tableheader: {
        background: '#37A3EC',
      },
      tablevalue: {
       color: '#25479E',
       fontSize:"13px",
       align:"center"
      },
      tabletitle: {
        color: 'white',
        fontSize: "14px"
      },
      button: {
        color: 'white',
        background: 'red',
        textalign: 'cender'
      },
      cancelIcon: {
        color: 'primary',
        background: 'red',
        textalign: 'cender'
      },
      button: {
        color: 'white',
        background: 'green',
        textalign: 'cender'
      },
      text: {
        color: 'white',
        marginTop: 60,
        textAlign: 'center',
        marginLeft: '300px',
      },
      paper: {
        position: 'absolute',
        width: 600,
        height: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: 1,
        marginLeft: 400,
        marginTop: 60,
      },
      card: {
        maxWidth: 440,
      },
      media: {
        height: 0,
        paddingTop: '40%', // 16:9
      },
      success: {
        width:'500',
        color: "#25479E",
        marginRight: "10px",
        display: 'inline',
        padding: "4px",
        fontSize:"13px"
      },
      textvalue: {
        width:'500',
        marginRight: "10px",
        display: 'inline',
        padding: "4px",
        fontSize:"13px"
      },
      avatar: {
        margin: 7,
      }
  });

class ReportList extends React.Component {

    componentDidMount() {
      const response = fetch(`http://localhost:8082/get_report_details`)
        .then(response => response.json())
        .then(data => this.setState({ users: data, isLoading: false })).catch(error => console.log("Error >>>>>" + error))
    }

    // componentDidUpdate(){
    //   const response = fetch(`http://localhost:8082/get_report_details`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ users: data, isLoading: false })).catch(error => console.log("Error >>>>>" + error))
    //   }
    state = {
      locationSearch: null,
      open: false,
      reportTitle: "",
      reportType: "",
      reportDesc: "",
      reportDateFormat: "",
      reportImage:"",
      users: [],
    //  user:null,
      id:0,
      comments:"",
      status:"",
      pageOfItems: [],
      reportStatus: '',
      updateValue:[],
      userName:'',
      mobileNo:'',
      disbaleButton:false,
      statusDisable:''
      // diableButton: false,
      // resolvedStatus:''
    };


    handleClose = (event) => {
      this.setState({ open: false});
    }
    rowClickEvent = (data) => {
      this.setState({
        open: true,
        reportTitle: data.reportTitle,
        reportType: data.reportType,
        reportDesc: data.reportDesc,
        reportImage: data.imageURL,
        id: data.id,
        comments:data.comments,
        mobileNo:data.mobileNo,
        userName:data.userName,
        statusDisable:data.status,
        disbaleButton:false
        
      });
      console.log("Status >>>>>>>>>>" + this.state.statusDisable)
      if(this.state.statusDisable === "Resolved")
      {
        this.setState({
          disbaleButton:true
        });
      }
     
    }

    deleteReportHandler = (report) => {
      this.props.removeReportList(report);
      ToastsStore.success("Deleted Successfully!");
    }

    approvalReportHandler (data) {
      ToastsStore.success("Action has been is taken");
    }

    updateReportHandler = (data) =>
    {
      fetch(`http://localhost:8082/update_report_details/${this.state.id}`, {
  method: 'PUT',
  body: JSON.stringify({
        id: this.state.id,
        comments: this.state.comments,
        status: data,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
 }).then(response => {
       return response.json()
 })
 .then(json => {
  this.setState({
        user:json,
        open: false,
        reportStatus: json.status,
    
  });
 })
  this.approvalReportHandler();
    this.retrieveApi();
    //ToastsStore.success("Query has been closed!");
    // this.setState({
    //   open: false
    // });
    //ToastsStore.success("Query has been closed!");
    
  }

  retrieveApi = () =>
  {
    console.log("retrie api >>>>>>>>>>>");
    const response = fetch(`http://localhost:8082/get_report_details`)
        .then(response => response.json())
        .then(data => this.setState({ users: data, isLoading: false })).catch(error => console.log("Error >>>>>" + error))
  }
    handlerChange = event =>
  {
      event.preventDefault();
      this.setState({
      [event.target.name]: event.target.value
      })
  }    

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems });
}

    rejectReportHandler = (report) => {
      this.props.rejectReport(report);
      ToastsStore.success("Rejected Successfully!");
    }

   
  render() {
    const { reportDetails, classes } = this.props;
    return (
      <div>
        <SidebarResponsive userType="AM"/>
        <Typography variant="h4" className={classes.header} color="primary">
          Report Management
         </Typography>
        <ToastsContainer store={ToastsStore} />
        <Paper className={classes.root}>
         
          <Table className={classes.table}>
            <TableHead className={classes.tableheader}>
              <TableRow>
                <TableCell className={classes.tabletitle}>TicketNo</TableCell>
                <TableCell className={classes.tabletitle}>ReportType</TableCell>
                <TableCell className={classes.tabletitle}>ReportTitle</TableCell>
                <TableCell className={classes.tabletitle}>Image</TableCell>
                <TableCell className={classes.tabletitle}>Status</TableCell>
                <TableCell className={classes.tabletitle}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.pageOfItems.map((report, index) =>

                <TableRow key={index} onClick={() => this.rowClickEvent(report)}>
                 
                 <TableCell className={classes.tablevalue}>
                    <strong>
                      {report.id}</strong></TableCell>
                  <TableCell className={classes.tablevalue}>
                    <strong>
                      {report.reportType}</strong></TableCell>
                  <TableCell className={classes.tablevalue} >
                    <strong>{report.reportTitle}</strong>
                  </TableCell>
                  <TableCell padding="none" >
                    <Avatar size="small" className={classes.avatar} src={report.imageURL} />
                  </TableCell>
                  <TableCell className={classes.tablevalue} >
                    <strong>{report.status}</strong></TableCell>

                  <TableCell className={classes.tablevalue}>
                    <strong>{report.reportDate}</strong></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <Pagination items={this.state.users} onChangePage={this.onChangePage} />
        </Paper>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div >
            <div className={classes.paper}>
              <Grid>
                  <Typography variant="h6"  align="center"  color="primary">
                    Report Details
                  </Typography>
                  <br/>
                  <br/>
                  <Box component="span" m={1} width="25%">
                  <Typography variant="title" align="left" className={classes.success} color="primary">
                    <strong>User Name :</strong> 
                  </Typography>
                  </Box>
                  <Box component="span" m={1} width="25%">
                  <Typography  align="right"  className={classes.textvalue} color="textSecondary">
                    <strong> {this.state.userName} </strong> 
                  </Typography>
                  </Box>
                  <br/>
                  <br/>
                  <Box component="span" m={1} width="25%">
                  <Typography variant="title"  className={classes.success} color="primary">
                    <strong>  Contact No :</strong> 
                  </Typography>
                  </Box>
                  <Box component="span" m={1} width="25%">
                  <Typography  className={classes.textvalue} color="textSecondary">

                  <strong>{this.state.mobileNo}</strong> 
                  </Typography>
                  </Box>
                <br/>
                <br/>
                <Box component="span" m={1} width="25%">
                <Typography variant="title" align="left" className={classes.success} color="primary">
                 <strong>Report Title  :</strong> 
            </Typography>
            </Box>
            <Box component="span" m={1} width="25%">
                <Typography  className={classes.textvalue} color="textSecondary">

                <strong>  {this.state.reportTitle}</strong>
                </Typography>
                </Box>
                <br/>
                <br/>
                <Box component="span" m={1} width="25%">
                <Typography variant="title" align="left" className={classes.success} color="primary">
                <strong> Report Type  :</strong>
            </Typography>
            </Box>
            <Box component="span" m={1} width="25%">
                <Typography  className={classes.textvalue} color="textSecondary" >
               <strong>
                    {this.state.reportType} </strong>
                </Typography>
                </Box>
                <br/>
                <br/>
                <Box component="span" m={1} width="25%">
                <Typography variant="title" align="left" className={classes.success} color="primary">
                <strong>  Report Description  : </strong>
            </Typography>
            </Box>
            <Box component="span" m={1} width="25%">
                  <Typography color="textSecondary"  variant="body2" style={{ width: '37.4rem',marginLeft:'10px', fontSize:"13px", height: '4rem' }}>
                <strong>
                 {this.state.reportDesc} </strong>
            </Typography>
            </Box>
            <Box component="span" m={1} width="25%">
                <Typography variant="title" align="left" className={classes.success} color="primary">
                <strong>
                  Comments : </strong> 
            </Typography>
            </Box>
                <Box border={1} borderColor="primary.main" color="textSecondary" >
                  <Input name="comments"  onChange={this.handlerChange} value={this.state.comments} color="textSecondary" multiline rows={5} fullWidth/>

                </Box>
                <Button onClick= {() => this.updateReportHandler("IP")} disabled={this.state.disbaleButton}  variant="contained" style = {{ marginTop:'4px',backgroundColor:'#25479e',color: 'white',}}  size="small">
                  progress
          </Button>
                <Button onClick= {() => this.updateReportHandler("RS")} disabled={this.state.disbaleButton} variant="contained" style = {{ marginTop:'4px',backgroundColor:'#4c940c',color: 'white',marginLeft:'10px'}}  size="small">
                  Resolved
          </Button> 
       
          <Button onClick= {() => this.updateReportHandler("RJ")} disabled={this.state.disbaleButton} variant="contained" style = {{ marginTop:'4px',marginLeft:'10px',backgroundColor:'#e62e00',color: 'white',}}  size="small">
                  Rejected
          </Button>
              </Grid>
            </div> 
            {/* </div> */}
          </div>
        </Modal>
      </div>
    );
  }
}

ReportList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  reportDetails: state.report.reportDetails,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeReportList, approvalReport, rejectReport
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReportList));
