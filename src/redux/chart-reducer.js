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
			data: [
            {x: 4864000, y: 0}   ,{x: 9728000, y: 41}  ,{x: 14592000, y: 99} ,{x: 19456000, y: 23} ,{x: 24320000, y: 57} ,{x: 29184000, y: 73} ,{x: 34048000, y: 14} ,{x: 38912000, y: 76} ,{x: 43776000, y: 60} ,{x: 48640000, y: 73} ,{x: 53504000, y: 83} ,{x: 58368000, y: 22} ,{x: 63232000, y: 88} ,{x: 68096000, y: 45} ,{x: 72960000, y: 38} ,{x: 77824000, y: 99} ,{x: 82688000, y: 59} ,{x: 87552000, y: 34} ,{x: 92416000, y: 55} ,{x: 97280000, y: 76} ,{x: 102144000, y: 61},{x: 107008000, y: 75},{x: 111872000, y: 25},{x: 116736000, y: 77},{x: 121600000, y: 70},{x: 126464000, y: 67},{x: 131328000, y: 53},{x: 136192000, y: 64},{x: 141056000, y: 23},{x: 145920000, y: 72},{x: 150784000, y: 16},{x: 155648000, y: 47},{x: 160512000, y: 29},{x: 165376000, y: 28},{x: 170240000, y: 12},{x: 175104000, y: 37},{x: 179968000, y: 65},{x: 184832000, y: 21},{x: 189696000, y: 27},{x: 194560000, y: 18},{x: 199424000, y: 49},{x: 204288000, y: 43},{x: 209152000, y: 71},{x: 214016000, y: 39},{x: 218880000, y: 35},{x: 223744000, y: 74},{x: 228608000, y: 30},{x: 233472000, y: 59},{x: 238336000, y: 44},{x: 243200000, y: 20},{x: 248064000, y: 53},{x: 252928000, y: 41},{x: 257792000, y: 93},{x: 262656000, y: 55},{x: 272656000, y: 25},{x: 282656000, y: 25}
        ]}],
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
