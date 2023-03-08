import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import arrayService from "./arrayService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({
  users,
  dataPlans,
  dataBlogs,
  dataProducts,
}) {
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Cantidad de creaciones por mes",
      },
    },
    responsive: true,
    interaction: {
      // mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const usersArray = arrayService(users);
  const plansArray = arrayService(dataPlans.plans);
  const blogsArray = arrayService(dataBlogs.blogs);
  const productsArray = arrayService(dataProducts.products);

  const data = {
    labels,
    datasets: [
      {
        label: "Usuarios",
        data: usersArray,
        backgroundColor: "rgba(242,118,33,1)",
        stack: "Stack 0",
      },
      {
        label: "Planes",
        data: plansArray,
        backgroundColor: "rgba(242,33,118, 1)",
        stack: "Stack 1",
      },
      {
        label: "Reseñas",
        data: blogsArray,
        backgroundColor: "rgba(241,225,0, 1)",
        stack: "Stack 2",
      },
      {
        label: "Productos",
        data: productsArray,
        backgroundColor: "rgba(112, 112, 112, 1)",
        stack: "Stack 3",
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
    />
  );
}
