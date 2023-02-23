const mapQuery = new Map();
export const queryString = (filter, order) => {
  switch (filter) {
    case "date":
      mapQuery.set("date", `?date=${order}&`);
      mapQuery.delete("order");
      break;
    case "order":
      switch (order) {
        case "nuevos":
          mapQuery.delete("order");
          mapQuery.delete("date");
          break;
        case "antiguos":
          mapQuery.set("order", `?order=${order}&`);
          mapQuery.delete("date");
          break;
        case "reverso":
          mapQuery.set("order", `?order=${order}&`);
          mapQuery.delete("date");
          break;
        case "alfabetico":
          mapQuery.set("order", `?order=${order}&`);
          mapQuery.delete("date");
          break;
        default:
          break;
      }
      break;
    case "state":
      switch (order) {
        case "En planeacion":
          mapQuery.set("state", `?state=${order}&`);
          break;
        case "En progreso":
          mapQuery.set("state", `?state=${order}&`);
          break;
        case "Finalizado":
          mapQuery.set("state", `?state=${order}&`);
          break;
        default:
          break;
      }
      break;
    case "limit":
      mapQuery.set("limit", `?limit=${order}&`);
      break;
    case "page":
      mapQuery.set("page", `?page=${order}&`);
      break;
    case "rating":
      mapQuery.set("rating", `?rating=${order}&`);
      break;
    default:
      break;
  }
  if (!mapQuery.get("date")) {
    mapQuery.set("date", "");
  }
  if (!mapQuery.get("order")) {
    mapQuery.set("order", "");
  }
  if (!mapQuery.get("state")) {
    mapQuery.set("state", "");
  }
  if (!mapQuery.get("limit")) {
    mapQuery.set("limit", "");
  }
  if (!mapQuery.get("page")) {
    mapQuery.set("page", "");
  }
  if (!mapQuery.get("rating")) {
    mapQuery.set("rating", "");
  }

  return `${mapQuery.get("date")}${mapQuery.get("order")}${mapQuery.get(
    "state"
  )}${mapQuery.get("limit")}${mapQuery.get("page")}${mapQuery.get("rating")}`;
};
