import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data =  {
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
      label: "Deaths",
      borderColor: "#ff3333",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      fill: true,
      lineTension: 0.5
    }
  ]
};

const Chart = () => {
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}

export default Chart;
