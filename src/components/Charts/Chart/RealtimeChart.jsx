import React, { Component } from "react";
import ApexCharts,{getNewSeri} from "apexcharts";
class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        const data = [10, 41, 35, 51, 49, 62, 69, 91, 148];
        const XAXISRANGE = 77;
        this.state = {
      
        series: [{
          data: data.slice()
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
                speed: 1000
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
            max: 100
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
          data: data
        }])
      }, 1000)
    }
  

    render() {
        
        const data = [10, 41, 35, 51, 49, 62, 69, 91, 148];
        const XAXISRANGE = 77;
        return (        
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
          );
        }
      }


export default ApexChart;