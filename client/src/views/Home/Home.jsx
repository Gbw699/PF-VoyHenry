import React from "react";
import PlansCardList from "../../recycle/PlanCardList/PlansCardList";
// import PlansSections from "../../recycle/PlansSections/PlansSections";
// import Footer from "../Footer/Footer";
import BlogReview from "../../components/Home/BlogReview";

export default function Home() {
  // const dispatch = useDispatch();
  return (
    <>
      <PlansCardList />
      {/* 
      <PlansSections /> */}
      <BlogReview />
      {/* <Footer /> */}
    </>
  );
}
