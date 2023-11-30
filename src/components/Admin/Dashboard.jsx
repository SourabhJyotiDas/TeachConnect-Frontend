import React, { useEffect } from "react";
import Sidebar from "./Sidebar";

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
import { getAllUsers, getDashboardStats } from "../../redux/actions/admin";
import Loading from "../layouts/Loading";
import { getAllCourses } from "../../redux/actions/course";
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
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.admin);

  const { users } = useSelector((state) => state.admin);
  const { courses } = useSelector((state) => state.course);

  const viewsData = courses && courses.map((ele) => ele.views);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllCourses());
    dispatch(getDashboardStats());
    window.scroll(0, 0);
  }, [dispatch]);

  const lineState = {
    labels: getLastYearMOnths(),
    datasets: [
      {
        label: "TOTAL VIEWS",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: viewsData,
      },
    ],
  };

  const SubscriberLists =
    users &&
    users.filter((ele) => {
      return ele.subscription && ele.subscription.status === "active";
    });

  const doughnutData = {
    labels: ["Subsribed", "Not Subscribed"],
    datasets: [
      {
        label: "# of orders",
        data: [
          SubscriberLists && SubscriberLists.length,
          Number(users && users.length) -
            Number(SubscriberLists && SubscriberLists.length),
        ],
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
    for (let i = 11; i > remain; i--) {
      if (i === currentMonth) break;
      const element = months[i];
      labels.unshift(element);
    }
    return labels;
  }

  return (
    <>
      <Sidebar />
      {loading ? (
        <Loading />
      ) : (
        <section className="text-gray-400 bg-gray-900 flex justify-center items-center pt-20">
          <div className="flex flex-col justify-center items-center ">
            <p className="text-center para text-xs">{`Last Updated was on ${
              String(new Date()).split("G")[0]
            }`}</p>
            <Doughnut data={doughnutData} />
            <Line data={lineState} />
          </div>
        </section>
      )}
    </>
  );
}
