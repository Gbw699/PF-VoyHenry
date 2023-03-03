import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MarketCard from "./MarketCard";
import Filters from "./Filters";
import marketBgImg from "../../assets/marketBg.png";
import style from "./MarketPlaceSection.module.css";
import { getProductsbyOrder } from "../../redux/slices/marketPlaceSlice/thunk";

export default function MarketPlaceSection() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsbyOrder("order", "nuevos"));
  }, []);

  const { products, pageNumber, pages } = useSelector(
    (state) => state.marketPlaceStore.filteredProducts
  );

  return (
    <>
      <div>
        <img
          src={marketBgImg}
          alt="Tienda"
          title="Tienda"
        />
      </div>
      <div className={style.container}>
        <div className={style.marketCont}>
          <Filters />
          <div>
            <Link to="/marketplace/admin">
              <button className={style.buttonAdmin}>Administrar</button>
            </Link>
          </div>
        </div>
        <div className={style.cardsCont}>
          {products ? (
            products?.map((element) => (
              <div key={element.id}>
                <Link to={`/marketplace/${element.id}`}>
                  <MarketCard
                    title={element.title}
                    image={element.mainImage}
                    price={element.price}
                  />
                </Link>
              </div>
            ))
          ) : (
            <h1 className={style.empty}>No hay ningún producto</h1>
          )}
        </div>
      </div>
    </>
  );
}
