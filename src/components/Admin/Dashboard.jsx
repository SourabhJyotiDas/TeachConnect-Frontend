import React from "react";
import Sidebar from "./Sidebar";
import { AiOutlineMenu } from "react-icons/ai";

import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement
)

export default function Dashboard() {
  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 5476],
      },
    ],
  };


  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data:
          // ordersCount
          //   ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered]
          //   :
          [23, 33, 66],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 flex pt-20">
        <Sidebar />
        <div className="flex flex-col justify-center items-center ">
          <p className="text-center para text-xs">{`Last Updated was on ${String(new Date()).split("G")[0]}`}</p>
          <Doughnut data={data} />
          <Line data={lineState} />

        </div>
      </section>
    </>
  );
}
