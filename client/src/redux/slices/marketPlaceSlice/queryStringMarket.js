export const marketQueryString = (filters) => {
  const query = {};

  if (filters.category) {
    query.category = filters.category;
  }

  if (filters.availability) {
    query.availability = filters.availability;
  }

  if (filters.order) {
    switch (filters.order) {
      case "title":
        query.order = "alfabetico";
        break;
      case "-title":
        query.order = "reverso";
        break;
      case "price":
        query.order = "ascendente";
        break;
      case "-price":
        query.order = "descendente";
        break;
      default:
        break;
    }
  }

  const queryString = new URLSearchParams(query).toString();

  return queryString ? `?${queryString}` : "";
};