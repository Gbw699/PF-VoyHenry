import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({ dataPlans, dataBlogs, dataProducts }) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Totales",
      },
    },
  };

  const data = {
    labels: ["Planes", "Reseñas", "Productos"],
    datasets: [
      {
        data: [
          dataPlans.plansInFilter,
          dataBlogs.blogsInFilter,
          dataProducts.productsInFilter,
        ],
        weight: 1,
        backgroundColor: [
          "rgba(242,33,118, 1)",
          "rgba(241,225,0, 1)",
          "rgba(112, 112, 112, 1)",
        ],
        borderColor: [
          "rgba(242,33,118, 1)",
          "rgba(241,225,0, 1)",
          "rgba(112, 112, 112, 1)",
        ],
        borderRadius: 8,
        borderWidth: 1,
        hoverOffset: 20,
        spacing: 3,
      },
    ],
  };

  return (
    <Doughnut
      options={options}
      data={data}
    />
  );
}
