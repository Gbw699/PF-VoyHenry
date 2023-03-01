import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";
import Filters from "./Filters";
import marketBgImg from "../../assets/marketBg.png";
import style from "./MarketPlaceSection.module.css";
import { getProductsbyOrder } from "../../redux/slices/marketPlaceSlice/thunk";

export default function MarketPlaceSection() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsbyOrder("order", "nuevos"));
    setBackgroundImage(`url(${marketBgImg})`);
  }, []);

  const handleDeleteProduct = (id) => {
    dispatch(id);
  };

  const { products, pageNumber, pages } = useSelector(
    (state) => state.marketPlaceStore.filteredProducts
  );

  if (products.length === 0) {
    return <div>La tienda está vacía</div>;
  }

  return (
    <div className={style.container}>
      <div
        className={style.marketBg}
        style={{ backgroundImage: backgroundImage }}
      />
      <div className={style.marketCont}>
        <Filters />
        <div className={style.cardsCont}>
          {products?.map((element) => (
            <div key={element.id}>
              <button onClick={handleDeleteProduct(element.id)}>X</button>
              <Link to={`/marketplace/${element.id}`}>
                <MarketCard
                  title={element.title}
                  image={element.mainImage}
                  price={element.price}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
