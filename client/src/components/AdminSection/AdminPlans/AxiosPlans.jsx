import axios from "axios";
import { useEffect } from "react";

export default function AxiosPlans({ setPlans, reRender }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/plans?limit=100");
        setPlans(data.plans.plans);
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
