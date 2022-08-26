import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "আয় & ব্যয় ",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: [0, 0, 0, 0, 30000, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(25, 135, 84, 0.8)",
    },
    {
      label: "Expense",
      data: [0, 0, 0, 0, 29250, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(220, 53, 69, 0.8)",
    },
    {
      label: "Remaining",
      data: [0, 0, 0, 0, 750, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(13,202,240, 0.8)",
    },
  ],
};

const BarChart = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Bar height={100} options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChart;
