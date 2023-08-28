import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { AiOutlineMenu } from "react-icons/ai";

import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardStats } from "../../redux/actions/admin";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Dashboard() {

  const dispatch = useDispatch()
  const {
    loading,
    stats,
    viewsCount,
    subscriptionCount,
    usersCount,
    subscriptionPercentage,
    viewsPercentage,
    usersPercentage,
    subscriptionProfit,
    viewsProfit,
    usersProfit,
  } = useSelector((state) => state.admin);

  console.log(
    stats,
    viewsCount,
    subscriptionCount,
    usersCount,
    subscriptionPercentage,
    viewsPercentage,
    usersPercentage,
    subscriptionProfit,
    viewsProfit,
    usersProfit
  );

  useEffect(() => {
    dispatch(getDashboardStats());
  }, [dispatch]);

  const lineState = {
    labels: getLastYearMOnths(),
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 476, 23, 456],
      },
    ],
  };

  const data = {
    labels: ["Subscribed", "Not Subscribed"],
    datasets: [
      {
        label: "# of orders",
        data:
          // ordersCount
          //   ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered]
          //   :
          [33, 66],
        backgroundColor: ["#8e5cf4", "#e9489b"],
        borderColor: ["white", "white"],
        borderWidth: 1,
      },
    ],
  };

  function getLastYearMOnths() {
    const labels = [];

    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentMonth = new Date().getMonth();
    const remain = 11 - currentMonth;

    for (let i = currentMonth; i < months.length; i--) {
      const element = months[i];
      labels.unshift(element);
      if (i === 0) break;
    }
    // console.log(labels);
    for (let i = 11; i > remain; i--) {
      if (i === currentMonth) break;
      const element = months[i];
      labels.unshift(element);
    }
    // console.log(labels);
    return labels;
  }

  return (
    <>
      <Sidebar />
      <section className="text-gray-400 bg-gray-900 flex justify-center items-center pt-20">
        <div className="flex flex-col justify-center items-center ">
          <p className="text-center para text-xs">{`Last Updated was on ${
            String(new Date()).split("G")[0]
          }`}</p>
          <Doughnut data={data} />
          <Line data={lineState} />
        </div>
      </section>
    </>
  );
}
