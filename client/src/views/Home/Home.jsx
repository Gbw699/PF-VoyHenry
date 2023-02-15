import React from "react";
import PlansCardList from "../../recycle/PlanCardList/PlansCardList";
import PlansSections from "../../recycle/PlansSections/PlansSections";
import ProfileInfo from "../../components/Home/ProfileInfo";
import Footer from "../Footer/Footer";
import BlogReview from "../../components/Home/BlogReview";
// import { useDispatch } from "react-redux";
// import { getTopPlans, getSelectionPlans } from "../../redux/slices/planSlice/thunk";
// import { getUser } from "../../redux/slices/userSlice/thunks";
// import { getBlog } from "../../redux/slices/blogSlice/thunk";

export default function Home() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getTopPlans());
  //   dispatch(getSelectionPlans());
  //   dispatch(getUser());
  //   dispatch(getBlog(1));
  // },[]);
  return (
    <>
      <ProfileInfo />
      <PlansCardList />
      {/* 
      <PlansSections /> */}
      <BlogReview />
      {/* <Footer /> */}
    </>
  );
}
