import axios from "axios";
import { useEffect } from "react";

export default function AxiosProducts({
  setProducts,
  reRender,
  dataDashboard,
  setDataDashboard,
}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/v1/products?limit=100");
        setProducts(data.products.products);
        setDataDashboard({
          ...dataDashboard,
          products: data.products.productsInFilter,
        });
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchData();
  }, [reRender]);
}
