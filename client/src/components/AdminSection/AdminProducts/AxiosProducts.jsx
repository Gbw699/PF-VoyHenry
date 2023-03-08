import axios from "axios";
import { useEffect } from "react";

export default function AxiosProducts({
  setProducts,
  reRender,
  setDataProducts,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/products?limit=100");
        setProducts(data.products.products);
      } catch (error) {
        console.error(error.response);
      }

      try {
        const { data } = await axios.get("/api/v1/products?limit=100");
        setDataProducts(data.products);
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
