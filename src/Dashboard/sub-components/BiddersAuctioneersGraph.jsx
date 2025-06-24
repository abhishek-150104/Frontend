import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const BiddersAuctioneersGraph = () => {
  const { totalAuctioneers, totalBidders } = useSelector(
    (state) => state.superAdmin
  );

  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Number of Bidders",
        data: totalBidders,
        borderColor: "#D6482B",
        backgroundColor: "#D6482B",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Number of Auctioneers",
        data: totalAuctioneers,
        borderColor: "#fdba88",
        backgroundColor: "#fdba88",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Monthly Bidders and Auctioneers Registered",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default BiddersAuctioneersGraph;
