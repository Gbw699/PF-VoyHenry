let params = {};

const addQueryParam = (key, value) => {
  if (value) {
    params[key] = `&${key}=${value}`;
  }
};

export const queryString = (filter, order) => {
  switch (filter) {
    case "date":
      addQueryParam("date", order);
      break;
    case "order":
      switch (order) {
        case "nuevos":
          params = {};
          break;
        case "antiguos":
        case "reverso":
        case "alfabetico":
          addQueryParam("order", order);
          break;
      }
      break;
    case "state":
      addQueryParam("state", order);
      break;
    case "limit":
      addQueryParam("limit", order);
      break;
    case "page":
      addQueryParam("page", order);
      break;
    case "rating":
      switch (order) {
        case "menosvotados":
        case "masvotados":
          addQueryParam("order", order);
          break;
      }
      addQueryParam("rating", order);
      break;
  }

  const queryParams = Object.values(params).join("");
  return queryParams ? `&${queryParams.substring(1)}` : "";
};
