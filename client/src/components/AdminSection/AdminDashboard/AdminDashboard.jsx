import { useEffect, useState } from "react";
import AxiosUsers from "../../Users/AxiosUsers";
import AxiosPlans from "../AdminPlans/AxiosPlans";
import AxiosBlogs from "../AdminBlogs/AxiosBlogs";
import AxiosProducts from "../AdminProducts/AxiosProducts";
import DoughnutChart from "./Doughnut";
import BarChart from "./BarChart";
import style from "./AdminDashboard.module.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [dataPlans, setDataPlans] = useState(null);
  const [dataBlogs, setDataBlogs] = useState(null);
  const [dataProducts, setDataProducts] = useState(null);

  return (
    <>
      <AxiosUsers setUsers={setUsers} />
      <AxiosPlans setDataPlans={setDataPlans} />
      <AxiosBlogs setDataBlogs={setDataBlogs} />
      <AxiosProducts setDataProducts={setDataProducts} />
      <div className={style.chartsContainer}>
        <div className={style.barchartContainer}>
          {dataPlans && dataBlogs && dataProducts && (
            <BarChart
              users={users}
              dataPlans={dataPlans}
              dataBlogs={dataBlogs}
              dataProducts={dataProducts}
            />
          )}
        </div>
        <div className={style.doughtnutContainer}>
          {dataPlans && dataBlogs && dataProducts && (
            <DoughnutChart
              dataPlans={dataPlans}
              dataBlogs={dataBlogs}
              dataProducts={dataProducts}
            />
          )}
        </div>
      </div>
    </>
  );
}
