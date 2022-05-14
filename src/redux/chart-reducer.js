import faker from '@faker-js/faker';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

var TICKINTERVAL =4864000;// 864000*5;
let XAXISRANGE = 777600000;
let XLENGTH = XAXISRANGE/TICKINTERVAL*1.1;
var SPEED = 1000;




let initialState = {
    chartsData1:{
        salesData:{
            labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                  label: 'Dataset 1',
                  data:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                  borderColor: "#0d6efd",
                  backgroundColor: 'white',
                },
                {
                  label: 'Dataset 2',
                  data:  ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                  borderColor: '#adb5bd',
                  backgroundColor: 'white',
                },
              ],
        },
        salesGoal: 77,
    },
    chartsData2:{
        supportQuestions: 1281,
        totalProfit: 14890.30,
        todaysOrder: 38,
        todayVisitors: 3765,
    },
    chartsData3:{
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            fill: 'start',
            backgroundColor: 'rgba(255, 99, 32, 0.1)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            fill: 'start',
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.1)', 
          },
          {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 199, 132)',
            fill: 'start',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
          },
          {
            label: 'Dataset 4',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(25, 99, 132)',
            fill: 'start',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
          },
        ],
      },
      chartsData4:{

        series: [{
			data: [{x:12, y:22}]
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
          //  curve: 'smooth'
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
       }

};

const chartReducer = (state = initialState, action) => {
    return state;
}

export default chartReducer;
