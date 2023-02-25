const mapQuery = new Map();

const setOrder = (order) => {
  const validOrders = {
    nuevos: null,
    antiguos: "antiguos",
    reverso: "reverso",
    alfabetico: "alfabetico",
  };
  const validRatingOrders = {
    menosvotados: "menosvotados",
    masvotados: "masvotados",
  };
  if (validOrders[order]) {
    mapQuery.set("order", `&order=${validOrders[order]}`);
    mapQuery.delete("rating");
    //mapQuery.delete("date");
  } else if (validRatingOrders[order]) {
    mapQuery.set("rating", `&order=${validRatingOrders[order]}`);
    mapQuery.delete("order");
    //mapQuery.delete("date");
  }
};

export const queryString = (filter, order) => {
  switch (filter) {
    case "date":
      if (order) {
        mapQuery.set("date", `&date=${order}`);
      } else {
        mapQuery.delete("date");
      }
      break;
    case "order":
      if (order === "nuevos") {
        mapQuery.clear();
      } else {
        setOrder(order);
      }
      break;
    case "state":
      if (order) {
        mapQuery.set("state", `&state=${order}`);
      } else {
        mapQuery.delete("state");
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
    case "rating":
      if (order) {
        setOrder(order);
        mapQuery.set("rating", `&rating=${order}`);
      } else {
        mapQuery.delete("rating");
      }
      break;
    case "country":
      if (order) {
        setOrder(order);
        mapQuery.set("country", `&country=${order}`);
      } else {
        mapQuery.delete("country");
      }
      break;
    case "province":
      if (order) {
        setOrder(order);
        mapQuery.set("province", `&province=${order}`);
      } else {
        mapQuery.delete("province");
      }
      break;
      case "clean":
      if (order) {
        mapQuery.delete("date");
        mapQuery.delete("order");
        mapQuery.delete("country");
        mapQuery.delete("province");
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
