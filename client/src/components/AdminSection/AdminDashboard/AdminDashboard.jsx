import { useState } from "react";
import AxiosPlans from "../AdminPlans/AxiosPlans";
import AxiosBlogs from "../AdminBlogs/AxiosBlogs";
import AxiosProducts from "../AdminProducts/AxiosProducts";

export default function AdminDashboard() {
  const [dataDashboard, setDataDashboard] = useState({});

  console.log(dataDashboard);
  return <div>
    <h3>holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h3>
    <AxiosPlans dataDashboard={dataDashboard} setDataDashboard={setDataDashboard}/>
    <AxiosBlogs dataDashboard={dataDashboard} setDataDashboard={setDataDashboard}/>
    <AxiosProducts dataDashboard={dataDashboard} setDataDashboard={setDataDashboard}/>
  </div>;
}
