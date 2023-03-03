import React, { useEffect } from "react";
import DetailMarketPlaceDescription from "./DetailMarketPlaceDescription";
import DetailMarketPlaceImgPrice from "./DetailMarketPlaceImgPrice";
import style from "./DetailMarketPlaceSection.module.css";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/marketPlaceSlice/thunk";

export default function DetailMarketPlaceSection() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(id));
  }, [dispatch]);

  const products = useSelector((state) => state.marketPlaceStore.detailProduct);
  return (
    <div className={style.mainContainer}>
      <div className={style.itemCont}>
        {products.map((element) => (
          <DetailMarketPlaceImgPrice
            id={element.id}
            key={element.id}
            image={element.mainImage}
            // imageExtra={element.images}
            stock={element.stock}
            title={element.title}
            price={element.price}
          />
        ))}
      </div>
      <div className={style.description}>
        <h6 className={style.descriptionTitle}>Descripción del producto:</h6>
        <hr
          color="#F1E100"
          width="100%"
        />
        {products.map((element) => (
          <DetailMarketPlaceDescription
            key={element.id}
            material={element.detail}
          />
        ))}
        <NavLink
          to={"/marketplace"}
          className={style.btnCont}
        >
          <button className={style.backBtn}>Volver</button>
        </NavLink>
      </div>
    </div>
  );
}
