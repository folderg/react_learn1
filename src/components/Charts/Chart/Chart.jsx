import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  defaults,
  Tooltip,
  Title
} from "chart.js";
import { Line } from "react-chartjs-2";

// require("./js/js-fluid-meter.js");




const chart = {
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip, Title);


const Chart = (props) => {
  
   
const lineChartData = {
    









    labels: ["October", "November", "December"],
    datasets: [
      {
        data: [8137119, 9431691, 10266674, 10266674],
        label: "Infected"+ props.charts,
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5
      },
      {
        data: [1216410, 1371390, 1477380],
        label: "Deaths" ,
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5
      }
    ]
};

  
const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
  
  return (
      <Line
      options={options}
      data={lineChartData}
    />

    
  );
};
export default Chart;