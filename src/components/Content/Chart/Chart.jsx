import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  defaults
} from "chart.js";
import { Line } from "react-chartjs-2";

const chart = {
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);


const Chart = (props) => {
   
  const lineChartData = {
    labels: ["October", "November", "December"],
    datasets: [
      {
        data: [8137119, 9431691, 10266674],
        label: "Infected",
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

  
  return (
  <div style={chart}>
      <Line
      type="line"
      width={100}
      height={60}
      options={{
        animations: {
          duration: 0, // general animation time
        },
        animations: false,

        hover: {
          animationDuration: 0, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, // animation duration after a resize
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        }
      }}
      data={lineChartData}
    />
  </div>
    
  );
};
export default Chart;