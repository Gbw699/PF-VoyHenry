import axios from "axios";
import { useEffect } from "react";

export default function AxiosPlans({ setProducts, reRender }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/products?limit=100");
        setProducts(data.products.products);
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
