import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import SidebarResponsive from '../appBar/sidebarResponsive';
import { number } from 'prop-types';

//import { olimpicMedals as data } from '../../../demo-data/data-vizualization';

const legendStyles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    marginTop:'10vh',
    
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

  const data=[];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      graph:[]
    };
  }

  componentDidMount() {
    this.hello();
 }

  hello = () => {
    fetch('/api/report')     
    .then(response=>{
      return response.json();
    })
     .then(jsonData=>
      {
        console.log('test>>>>>>>>>>>>>>>>>>>>>>>'+JSON.stringify(jsonData));
        this.setState({data:jsonData});
      })
     
      }

  render() {
    
    var result = [];
    result.push({Issue: "Restroom", Open: 0, Closed: "0", InProgress: "0", Rejected: "0"});
     {this.state.data.map((item, i) => {
        var abc = {Issue: item.reportType, 
          Open: parseInt(item.openIssues), 
          Closed: parseInt(item.closedIssues),
          InProgress:parseInt(item.inProgressIssues),
          Rejected:parseInt(item.rejectedIssues)} ;
        result.push(abc); 
        
     } )
     
   }
  
    return (
      <div style={{padding:'10px',marginLeft:230,marginTop:120}}>
         <SidebarResponsive userType="AM"/>
      <Paper >
        <Chart
          
          data={result}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Open"
            valueField="Open"
            argumentField="Issue"
            color="#8884d8"
          />
          <BarSeries
            name="Resolved"
            valueField="Closed"
            argumentField="Issue"
            color="#db9515"
          />
          <BarSeries
            name="InProgress"
            valueField="InProgress"
            argumentField="Issue"
            color="#64db15"
          />

        <BarSeries
            name="Rejected"
            valueField="Rejected"
            argumentField="Issue"
            color="#c0c0c0"
          />

          <Animation />
          { <Legend position="bottom" rootComponent={Root} labelComponent={Label} /> }
          <Title text="Issue Reports" />
          <Stack />
        </Chart>
      </Paper>
      </div>
    );
  }
}

