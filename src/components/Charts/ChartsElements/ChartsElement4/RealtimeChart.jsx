import React, { Component } from "react";
import ApexCharts from "apexcharts";
import ReactApexChart from 'react-apexcharts'

var TICKINTERVAL =4864000;// 864000*5;
let XAXISRANGE = 777600000;
let XLENGTH = XAXISRANGE/TICKINTERVAL*1.1;
var SPEED = 1000;

var data = [
  {x:TICKINTERVAL, y:0}
];
var lastDate = TICKINTERVAL;




function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({
      x, y
    });
    lastDate = baseval
    baseval += TICKINTERVAL;
    i++;
  }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
  min: 10,
  max: 90
})




function getNewSeries(baseval, yrange) {
  var newDate = baseval + TICKINTERVAL;
  lastDate = newDate;

  for(var i = 0; i< data.length - XLENGTH; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL
    data[i].y = 0
  }
  let temp = data[data.length-1].y;
  data.push({
    x: newDate,
    // y:temp + Math.floor(Math.random() * (10 + 10 + 1 )) - 10
    y: Math.floor(Math.random() * yrange.max) + yrange.min
    // y:  Math.sin(newDate/10000000) * 10 + 50
  })

}




class ApexChart extends React.Component {
  

    constructor(props) {
        super(props);
        this.state = {
      
        series: [{
          data: data.slice()//   props.chartsData.series[0].data  
        }],
        options: {
          chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: SPEED
              }
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
           curve: 'smooth'
          },
          title: {
            text: 'Dynamic Updating Chart',
            align: 'left'
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime',
            range: XAXISRANGE,
          },
          yaxis: {
            max: 100,
            min: 0
          },
          legend: {
            show: false
          },
        },
      
      
      };
        
    }

    
    componentDidMount() {
      window.setInterval(() => {
        getNewSeries(lastDate, {
          min: 10,
          max: 90
        })
        
        ApexCharts.exec('realtime', 'updateSeries', [{
          data: data.slice()
        }])
      }, SPEED)
    }
  

    render() {
        ;
        return (        
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
          );
        }
      }


export default ApexChart;
