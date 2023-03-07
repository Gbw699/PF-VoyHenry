import axios from "axios";
import { useEffect } from "react";

export default function AxiosPlans({
  setPlans,
  reRender,
  dataDashboard,
  setDataDashboard,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/plans?limit=100");
        setPlans(data.plans.plans);
        setDataDashboard({ ...dataDashboard, plans: data.plans.plansInFilter });
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
