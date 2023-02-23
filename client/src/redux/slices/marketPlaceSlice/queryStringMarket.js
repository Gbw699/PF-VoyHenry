const mapQuery = new Map();

export const queryString = (filter, order) => {
    switch (filter) {
        case "order":
            switch (order) {
                case "alfabetico":
                    mapQuery.set("order", `?order=${order}&`);
                    break;
                case "reverso":
                    mapQuery.set("order", `?order=${order}&`);
                    break;
                case "ascendente":
                    mapQuery.set("order", `?order=${order}&`);
                    break;
                case "descendente":
                    mapQuery.set("order", `?order=${order}&`);
                    break;
                default:
                    break;
            }
            break;
        case "category":
            switch (order) {
                case "remeras":
                    mapQuery.set("category", "?category=Remeras&");
                    break;
                case "pantalones":
                    mapQuery.set("category", "?category=Pantalones&");
                    break;
                case "gorros":
                    mapQuery.set("category", "?category=Gorros&");
                    break;
                default:
                    break;
            }
            break;
        case "availability":
            switch (order) {
                case "inStock":
                    mapQuery.set("availability", "?availability=true&");
                    break;
                case "outStock":
                    mapQuery.set("availability", "?availability=false&");
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

    if (!mapQuery.get("order")) {
        mapQuery.set("order", "");
    }

    if (!mapQuery.get("category")) {
        mapQuery.set("category", "");
    }

    if (!mapQuery.get("availability")) {
        mapQuery.set("availability", "");
    }

    return `${mapQuery.get("order")}${mapQuery.get("category")}${mapQuery.get("availability")}`;
};