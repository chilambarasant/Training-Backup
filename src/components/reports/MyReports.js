import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {DropzoneArea} from 'material-ui-dropzone';
import {connect} from 'react-redux';
import { getReportList,getCountIncress,rejectReport} from './actions';
import {bindActionCreators} from 'redux';
import Typography from '@material-ui/core/Typography';
import axios, { post } from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Dropzone from 'react-dropzone';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormControl,FormLabel } from '@material-ui/core';
import SidebarResponsive from '../appBar/sidebarResponsive';
//import InputLabel from '@material-ui/core/InputLabel';
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
      form: {
        position: 'flex',
        width: 850,
        height: 585,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 2,
        outline: 'none',
        margin: '70px 0 0 275px',
      },
      textField: {
        marginTop: '1px',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 800,
      //  height:60
      },
      labelField: {
        marginLeft: '20px',
      
      //  height:60
      },
      button: {
        background: "#4286f4",
        borderRadius: 5,
        border: 0,
        color: "white",
        padding: "4px 8px 4px 8px",
        marginLeft:"4px",
        width:100
      },
      success: {
        color: "#25479E",
        marginRight:"10px",
        display: 'inline',
        padding: "4px",
      },
});

const query = {
  query: {
    match: {
      "name": "ka"
    }
  }
};


class MyReports extends React.Component {
    state = {
      open: true,
      reportTitle:'',
      reportType:'',
      reportDesc: '',
      status : "Open",
      reportDetails: [],
      latitude: null,
      longitude: null,
      error: null,
      successMsg: false,
      location: false,
      place: '',
      errPlace: false,
      errTitle: false,
      errType: false,
      errDesc: false,
      file: null,
      rowData: []
    };

  componentDidMount(){
    this.getlocation()
    
  }

  handleUploadFile = (event) =>
  {
    this.setState({
    file : event.target.files[0]
    });
  }
  selectLocationHandler = () => {
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => this.getlocation(position.coords.latitude,position.coords.longitude)  ,
    //   (err)=> this.setState({ error: err.message })
    //   );
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    }
  getlocation =(latitude,longitude)=>{
        this.setState({
          latitude :latitude,
          longitude:longitude,
          location:true
        })
  }

  selectFileHandler = (files) => {
      this.setState({
        files: files,
      });
    };

  handlerChange = event =>
  {
      event.preventDefault();
      this.setState({
      [event.target.name]: event.target.value,
      successMsg: false,
      location:false,
      errPlace: false,
      errTitle: false,
      errType: false,
      errDesc: false
      })
  }    

 
  selectSubmitHandler =  () =>
    {
      if(this.validationForm())
      { 
        this.props.getCountIncress();
        var lists = JSON.parse(JSON.stringify({ID: this.props.count,ReportTitle: this.state.reportTitle
       ,ReportType: this.state.reportType,ReportDesc:this.state.reportDesc,Status:this.state.status}));
       this.props.getReportList(lists);

       this.fileUpload(this.state.file,this.state.reportTitle,this.state.reportType,this.state.reportDesc).then((response)=>{
        
       })
     this.resetFunction();
      }
    }

     fileUpload(file,reportTitle,reportType,reportDesc){
       
       const url = 'http://localhost:8082/save_report_details';
       const formData = new FormData();
       formData.append('file',file)
       formData.append('reportTitle',reportTitle)
       formData.append('reportType',reportType)
       formData.append('reportDesc',reportDesc)
       formData.append('userName',"Janakiram.ela")
       formData.append('mobileNo',"9786441044")
       const config = {
           headers: {
               'content-type': 'multipart/form-data'
           }
       }
       return  post(url, formData,config)
     }
  resetFunction = () =>
  {
      this.setState(
            {
            reportTitle: '',
            reportType: '',
            reportDesc:'',
            successMsg: true,
            place: '',
            }
        );
  }

  onDrop = (File) => {
    this.setState(
      {
        file: File
      }
  );
  }

  validationForm  () 
  { 
      let isValid = true;
      if(this.state.reportTitle === "") 
      {
        this.setState(
          {
              errTitle: true
          }
      );
        isValid = false;
      }
      if(this.state.reportType === "") 
      {
        this.setState(
          {
              errType: true
          }
      );
        isValid = false;
      }

      if(this.state.reportDesc === "") 
      {
        this.setState(
          {
              errDesc: true
          }
      );
        isValid = false;
      }
      return isValid        
  }

  render() {
   
    const { classes,reportDetails,count,submitSuccess} = this.props;
    return (
      
      <div>
          <SidebarResponsive userType="EM"/>
        <form className={classes.form} onSubmit={this.selectSubmitHandler}> 

        <Typography variant="16" className={classes.success}>
         <strong>Write an Issue</strong>
      </Typography> 
      <br/>
      <br/>
        <TextField id="standard-name" label="Report Title" className={classes.textField}
         value={this.state.reportTitle} error={this.state.errTitle}  name="reportTitle" margin="normal" variant="outlined" onChange={this.handlerChange}/>
<br/>
      <br/>
      <FormControl >
      <InputLabel  className={classes.labelField}>Report Type</InputLabel>
<Select variant="filled" 
            value={this.state.reportType}
            onChange={this.handlerChange}
            name="reportType"  error={this.state.errType} 
            input={
              <OutlinedInput
              
              />
            }  className={classes.textField}
          >
          
            <MenuItem value="" disabled>
              Select Categories
            </MenuItem>
            <MenuItem value="MR">Meeting Room</MenuItem>
            <MenuItem value="CF">Cafeteria</MenuItem>
            <MenuItem value="GP">Gym / PlayArea</MenuItem>
            <MenuItem value="RT">Restrooms</MenuItem>
            <MenuItem value="OT">Others</MenuItem>
          </Select>
          {/* </TextField> */}
          </FormControl>
        {/* <TextField id="standard-name" label="Type of Report"
            className={classes.textField} value={this.state.reportType}
        margin="normal" variant="outlined"  error={this.state.errType} name="reportType" onChange={this.handlerChange}/> */}
  <br/>
  <br/>
        <TextField id="standard-name" label="Description" className={classes.textField}
        value={this.state.reportDesc} error={this.state.errDesc} margin="normal" name="reportDesc"  variant="outlined" onChange={this.handlerChange}/>
        <br />

        {/* <TextField id="standard-name"  label="Location" 
            className={classes.textField} value={this.state.place}
        margin="normal" error={this.state.errPlace} variant="outlined" name="place" onChange = {this.handlerChange}/>
        <br /> */}

        {/* <Button className={classes.button} onClick = {this.selectLocationHandler} >Map</Button> */}
     {/* <LocationComponent latitude={this.state.latitude} longitude={this.state.longitude}/> */}
    {/* {  this.state.location && 
     <LocationComponent style={{border:"2px solid black"}} latitude={this.state.latitude} longitude={this.state.longitude}/>
    } */}
    {/* <input type="file" onChange={this.selectFileHandler}/> */}
        <DropzoneArea onDrop={this.onDrop}> 
        </DropzoneArea>

{/* <input type="file" onChange={this.handleUploadFile} /> */}
        <br />
        <Button type="submit" className={classes.button} >Submit</Button> 
        {/* <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}></Button> */}
   {
     this.state.successMsg &&
        <Typography variant="14" className={classes.success}>
         <strong>Report has been registered Successfully!</strong>
      </Typography>   }
        </form>
         
      </div>
    );
  }
}

MyReports.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
  reportDetails : state.report.reportDetails,
  count :  state.report.count,
 // isMovieLoaded : state.movies.isMovieLoaded
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  getReportList,getCountIncress,rejectReport
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MyReports));

//export default withStyles(styles)(MyReports);
