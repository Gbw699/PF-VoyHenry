const mapQuery = new Map();

const setOrder = (order) => {
  const validOrders = {
    nuevos: null,
    reverso: "reverso",
    alfabetico: "alfabetico",
    ascendente: "ascendente",
    descendente: "descendente",
  };

  if (validOrders[order]) {
    mapQuery.set("order", `&order=${validOrders[order]}`);
  }
};

export const queryString = (filter, order) => {
  switch (filter) {
    case "order":
      if (order === "nuevos") {
        mapQuery.clear();
      } else {
        setOrder(order);
      }
      break;
    case "availability":
      if (order) {
        mapQuery.set("availability", `&availability=${order}`);
      } else {
        mapQuery.delete("availability");
      }
      break;
    case "limit":
      if (order) {
        mapQuery.set("limit", `&limit=${order}`);
      } else {
        mapQuery.delete("limit");
      }
      break;
    case "page":
      if (order) {
        mapQuery.set("page", `&page=${order}`);
      } else {
        mapQuery.delete("page");
      }
      break;
    case "category":
      if (order) {
        setOrder(order);
        mapQuery.set("category", `&category=${order}`);
      } else {
        mapQuery.delete("category");
      }
      break;
    case "clean":
      if (order) {
        mapQuery.delete("limit");
        mapQuery.delete("order");
        mapQuery.delete("category");
        mapQuery.delete("availability");
        mapQuery.set("page", `&page=${order}`);
      } else {
        mapQuery.delete("page");
      }
      break;
    default:
      break;
  }

  let queryString = "";
  for (const value of mapQuery.values()) {
    queryString += value;
  }

  return queryString;
};
